"use client";

import { useState, useEffect } from 'react';

export default function PerfilPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(''); // Asegúrate de manejar el ID correctamente

    useEffect(() => {
        // Simulación de carga de datos del perfil
        const fetchPerfil = async () => {
            // Aquí podrías obtener el perfil del usuario actual
            const perfil = {
                id: '1', // Asegúrate de tener el ID correcto
                name: 'Juan Pérez',
                email: 'juan.perez@example.com',
            };

            setId(perfil.id); // Setea el ID correctamente
            setName(perfil.name);
            setEmail(perfil.email);
        };

        fetchPerfil();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const perfilData = { id, name, email, password }; // Asegúrate de incluir el ID correcto

        console.log('Enviando datos de perfil:', perfilData); // Verifica los datos que se están enviando

        try {
            const res = await fetch('/api/perfil', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(perfilData),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Error de respuesta:', errorText);
                throw new Error('Error al guardar los cambios');
            }

            const result = await res.json();
            console.log('Perfil actualizado con éxito:', result);
            alert('Perfil actualizado con éxito');
            setPassword('');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error.message);
            alert(`Hubo un error al actualizar el perfil: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-20" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')" }}>
            <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-md mt-2">
                <h1 className="text-4xl font-bold mb-4 text-center">Configuración de Perfil</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                            className="mt-1 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Tu correo electrónico"
                            className="mt-1 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nueva contraseña"
                            className="mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
