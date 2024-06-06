// pages/incidencias/edit/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getIncidencia, updateIncidencia } from '@/lib/actions';
import EditFormIncidencia from '@/components/EditFormIncidencia';

export default function EditIncidenciaPage() {
  const router = useRouter();
  const { id } = router.query;
  const [incidencia, setIncidencia] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await getIncidencia(id);
        setIncidencia(data);
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await updateIncidencia(id, formData);
    router.push('/reports');
  };

  if (!incidencia) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-black">
      <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-extrabold my-6">Editar Incidencia</h1>
        <EditFormIncidencia incidencia={incidencia} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
