import Form from "@/components/FormIncidenciaAdmin";
import Button from "@/components/Button";
import { prisma } from '@/lib/prisma';
import { editIncidencia, editIncidenciaAdmin } from "@/lib/actions";

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }) {
  const { id } = searchParams;

  // Verifica si el id está presente y es un número válido
  if (!id || isNaN(Number(id))) {
    return (
      <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h3 className="text-3xl font-bold text-center">Invalid ID</h3>
      </div>
    );
  }

  const incidencia = await prisma.incidencia.findUnique({
    where: {
      id: Number(id),
    },
  });

  // Maneja el caso donde la incidencia no se encuentra
  if (!incidencia) {
    return (
      <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h3 className="text-3xl font-bold text-center">Incidencia not found</h3>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h3 className="text-3xl font-bold text-center">Editar incidencia {id}</h3>
      <Form action={editIncidenciaAdmin} title='Editar incidencia' incidencia={incidencia} />
    </div>
  );
}
