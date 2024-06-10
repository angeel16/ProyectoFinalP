// src/components/FormIncidenciaAdmin.js
"use client";

import React, { useState } from 'react';

function FormIncidenciaAdmin({ action, incidencia }) {
    const [titulo, setTitulo] = useState(incidencia?.titulo || '');
    const [descripcion, setDescripcion] = useState(incidencia?.descripcion || '');
    const [estado, setEstado] = useState(incidencia?.estado || 'PENDIENTE');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await action({ titulo, descripcion, estado });
            alert('Incidencia actualizada con éxito');
        } catch (error) {
            console.error('Error al actualizar la incidencia:', error);
            alert('Hubo un error al actualizar la incidencia');
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
            <label className="block mb-2 text-sm font-bold text-gray-700">
                Estado
                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                >
                    <option value="PENDIENTE">Pendiente</option>
                    <option value="EN_PROGRESO">En Progreso</option>
                    <option value="RESUELTO">Resuelto</option>
                    <option value="CERRADO">Cerrado</option>
                </select>
            </label>
            <button
                type="submit"
                className="mt-4 p-2 bg-blue-600 text-white rounded-md shadow-lg"
            >
                Guardar
            </button>
        </form>
    );
}

export default FormIncidenciaAdmin;
