import Form from "@/components/FormIncidencia"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteIncidencia } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const incidencia = await prisma.incidencia.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });

  return (
    <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h3 className="text-3xl font-bold text-center">Eliminar incidencia {searchParams.id}</h3>
      <Form action={deleteIncidencia} title='Eliminar incidencia' producto={incidencia} />
    </div>
  )
}

export default page