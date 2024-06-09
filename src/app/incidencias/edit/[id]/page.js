// app/incidencias/edit/[id]/page.js (Componente de Servidor)

import { notFound, redirect } from 'next/navigation';
import IncidenciaForm from '../../../../components/IncidenciaForm';
import prisma from '../../../../lib/prisma';

// Función del Componente de Servidor
const EditarIncidenciaPage = async ({ params }) => {
  const { id } = params;

  // Obtener datos de la incidencia desde la base de datos
  const incidencia = await prisma.incidencia.findUnique({
    where: { id: parseInt(id, 10) },
  });

  // Redirigir si la incidencia no existe
  if (!incidencia) {
    notFound(); // Muestra una página 404
    // O puedes redirigir a otra página si prefieres
    // redirect('/incidencias');
  }

  return (
    <div>
      <h1>Editar Incidencia</h1>
      <IncidenciaForm initialData={incidencia} />
    </div>
  );
};

export default EditarIncidenciaPage;
