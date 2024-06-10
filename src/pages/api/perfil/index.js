// src/pages/api/perfil/index.js
import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, name, email, password } = req.body;

        try {
            // Verifica si el usuario existe
            const userExistente = await prisma.user.findUnique({
                where: { id: String(id) }, // Convertir ID a String
            });

            if (!userExistente) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            // Realiza la actualización si el usuario existe
            const userActualizado = await prisma.user.update({
                where: { id: String(id) },
                data: {
                    name,
                    email,
                    ...(password && { password }), // Solo actualizar la contraseña si se proporciona
                },
            });

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
