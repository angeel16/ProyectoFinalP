// src/app/incidencias/edit/[id]/page.js
import { prisma } from '@/lib/prisma';

export default async function EditPage({ params }) {
    const { id } = params;
    const incidencia = await prisma.incidencia.findUnique({
        where: { id: parseInt(id, 10) },
    });

    if (!incidencia) {
        // Manejo del caso donde la incidencia no se encuentra
        return {
            notFound: true,
        };
    }

    // Renderiza la página de edición con la información de incidencia
    return (
        <div>
            <h1>Editar Incidencia</h1>
            <p>ID: {incidencia.id}</p>
            <p>Descripción: {incidencia.descripcion}</p>
            {/* Agrega el formulario o componentes necesarios para editar */}
        </div>
    );
}
