// // src/pages/api/auth/login.js
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import userModel from '@/lib/userModel'; // Asegúrate de que la ruta es correcta

// export default async function login(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const { email, password } = req.body;

//     try {
//         // Encuentra al usuario por correo electrónico
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Verifica la contraseña
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Crea un token JWT
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         return res.status(200).json({ token });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// }
