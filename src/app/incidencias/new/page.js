// src/app/incidencias/new/page.js
import Form from "@/components/FormIncidencia";
import Button from "@/components/Button";
import { newIncidencia } from "@/lib/actions";
import { FaExclamationCircle } from 'react-icons/fa';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-20" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')" }}>
      <h3 className="text-4xl font-bold text-blue-900 mb-8 mt-4 drop-shadow-lg flex items-center">
        <FaExclamationCircle className="mr-2" /> Nueva Incidencia
      </h3>
      <Form action={newIncidencia} incidencia={null}>
        <Button title="Crear Incidencia" />
      </Form>
    </div>
  );
}

export default Page;
