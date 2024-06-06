// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     const { id } = req.query;

//     if (!id || isNaN(parseInt(id))) {
//         return res.status(400).json({ error: 'Invalid ID' });
//     }

//     const incidencia = await prisma.incidencia.findUnique({
//         where: {
//             id: parseInt(id),
//         },
//     });

//     if (!incidencia) {
//         return res.status(404).json({ error: 'Incidencia not found' });
//     }

//     res.status(200).json(incidencia);
// }
