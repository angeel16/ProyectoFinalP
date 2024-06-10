// src/pages/api/perfil/index.js
import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, name, email, password } = req.body;

        console.log('Datos recibidos en la API:', { id, name, email, password }); // Log

        try {
            const userExistente = await prisma.user.findUnique({
                where: { id: String(id) }, // Convertir ID a String
            });

            if (!userExistente) {
                console.log('Usuario no encontrado:', id); // Log
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const userActualizado = await prisma.user.update({
                where: { id: String(id) },
                data: {
                    name,
                    email,
                    ...(password && { password }),
                },
            });

            console.log('Usuario actualizado:', userActualizado); // Log
            res.status(200).json(userActualizado);
        } catch (error) {
            console.error('Error al actualizar el perfil:', error.message);
            res.status(500).json({ error: 'Error al actualizar el perfil' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}
