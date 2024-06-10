// src/app/incidencias/list/page.js
import Link from 'next/link';
import { getIncidencias } from '@/lib/actions';

export default async function ListPage() {
    const incidencias = await getIncidencias();

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-20" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')" }}>
            <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-md mt-2">
                <h1 className="text-4xl font-bold mb-4 text-center">Lista de Incidencias</h1>
                {incidencias.length > 0 ? (
                    <div className="space-y-4">
                        {incidencias.map((incidencia) => (
                            <div key={incidencia.id} className="p-4 bg-white rounded-md shadow-md flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-bold">{incidencia.titulo}</h2>
                                    <p className="text-gray-600">{incidencia.descripcion}</p>
                                    <p className="text-gray-500">Estado: {incidencia.estado}</p>
                                </div>
                                <Link legacyBehavior href={`/incidencias/edit/${incidencia.id}`}>
                                    <a className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Editar</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No hay incidencias</p>
                )}
            </div>
        </div>
    );
}
