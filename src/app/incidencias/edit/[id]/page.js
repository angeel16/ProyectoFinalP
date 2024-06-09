// app/incidencias/[id]/page.jsx (componente de servidor en Next.js 13+)

// Usaremos `getServerSideProps` en lugar de `useRouter` para obtener los datos en el servidor
import { notFound } from 'next/navigation';
import IncidenciaForm from '../../../components/IncidenciaForm';
import prisma from '../../../lib/prisma';

const EditarIncidenciaPage = async ({ params }) => {
  const { id } = params;

  const incidencia = await prisma.incidencia.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!incidencia) {
    notFound();
  }

  return (
    <div>
      <h1>Editar Incidencia</h1>
      <IncidenciaForm initialData={incidencia} />
    </div>
  );
};

export default EditarIncidenciaPage;
