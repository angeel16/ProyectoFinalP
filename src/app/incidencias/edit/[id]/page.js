// app/incidencias/edit/[id]/page.js

import { notFound } from 'next/navigation';
import FormIncidencia from '@/components/FormIncidencia';
import prisma from '@/lib/prisma';

const EditarIncidenciaPage = async ({ params }) => {
    const { id } = params;

    const incidencia = await prisma.incidencia.findUnique({
        where: { id: parseInt(id, 10) },
    });

    if (!incidencia) {
        notFound();
    }

    return (
        <div>
            <h1>Editar Incidencia</h1>
            <FormIncidencia initialData={incidencia} />
        </div>
    );
};

export default EditarIncidenciaPage;
