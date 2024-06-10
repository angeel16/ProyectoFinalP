// src/app/incidencias/new/page.js
"use client";

import FormIncidenciaUsuario from "@/components/FormIncidenciaUsuario";
import { newIncidencia } from "@/lib/actions";

export default function NewIncidenciaPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center pt-20" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')" }}>
      <h3 className="text-4xl font-bold text-blue-900 mb-8 mt-4 drop-shadow-lg">
        Nueva Incidencia
      </h3>
      <FormIncidenciaUsuario action={newIncidencia} />
    </div>
  );
}
