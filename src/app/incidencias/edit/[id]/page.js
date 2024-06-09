// // app/incidencias/edit/[id]/page.js

// import { notFound } from 'next/navigation';
// import IncidenciaForm from '../../../../components/IncidenciaForm';
// import prisma from '../../../../lib/prisma';

// const EditarIncidenciaPage = async ({ params }) => {
//   const { id } = params;

//   // Obtener la incidencia desde la base de datos
//   const incidencia = await prisma.incidencia.findUnique({
//     where: { id: parseInt(id, 10) },
//   });

//   // Si no se encuentra la incidencia, mostrar la página 404
//   if (!incidencia) {
//     notFound();
//   }

//   return (
//     <div>
//       <h1>Editar Incidencia</h1>
//       <IncidenciaForm initialData={incidencia} />
//     </div>
//   );
// };

// export default EditarIncidenciaPage;
