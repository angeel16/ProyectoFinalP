// pages/api/perfil.js
export default async function handler(req, res) {
    if (req.method === 'PUT') {
        // Simulación de búsqueda de usuario y actualización
        const { id, name, email, password } = req.body;

        // Supongamos que obtenemos el usuario del almacenamiento (base de datos, etc.)
        const user = { id: '1', name: 'Juan Pérez', email: 'juan.perez@example.com' }; // Usuario mock

        if (id !== user.id) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Actualización del usuario
        const updatedUser = { ...user, name, email, password };

        // Aquí se realizaría la lógica para guardar los cambios en la base de datos

        return res.status(200).json({ message: 'Perfil actualizado con éxito', user: updatedUser });
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
