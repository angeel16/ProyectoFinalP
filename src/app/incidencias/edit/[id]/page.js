// src/app/incidencias/edit/[id]/page.js
"use client";

import { useState, useEffect } from 'react';
import FormIncidenciaAdmin from '@/components/FormIncidenciaAdmin';
import { editIncidencia } from '@/lib/actions';

async function fetchIncidencia(id) {
    const res = await fetch(`/api/incidencias/${id}`);
    if (!res.ok) {
        throw new Error('Error al obtener la incidencia');
    }
    return res.json();
}

export default function EditPage({ params }) {
    const { id } = params; // `params.id` contiene el ID de la incidencia
    const [incidencia, setIncidencia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadIncidencia() {
            try {
                const data = await fetchIncidencia(id);
                setIncidencia(data);
            } catch (error) {
                console.error('Error al cargar la incidencia:', error);
            } finally {
                setLoading(false);
            }
        }
        loadIncidencia();
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!incidencia) {
        return <p>Incidencia no encontrada</p>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-20" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')" }}>
            <h3 className="text-4xl font-bold text-blue-900 mb-8 mt-4 drop-shadow-lg flex items-center">
                Editar Incidencia
            </h3>
            <FormIncidenciaAdmin action={(data) => editIncidencia(id, data)} incidencia={incidencia} />
        </div>
    );
}
