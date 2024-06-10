// src/components/FormIncidenciaUsuario.js
"use client";

import React, { useState } from 'react';

function FormIncidenciaUsuario({ action }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await action({ titulo, descripcion });
            alert('Incidencia creada con éxito');
            setTitulo('');
            setDescripcion('');
        } catch (error) {
            console.error('Error al crear la incidencia:', error);
            alert('Hubo un error al crear la incidencia');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <label className="block mb-2 text-sm font-bold text-gray-700">
                Título
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
            </label>
            <label className="block mb-2 text-sm font-bold text-gray-700">
                Descripción
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
            </label>
            <button
                type="submit"
                className="mt-4 p-2 bg-blue-600 text-white rounded-md shadow-lg"
            >
                Crear
            </button>
        </form>
    );
}

export default FormIncidenciaUsuario;
