// src/components/FormIncidencia.js
import Button from "@/components/Button";

function FormIncidencia({ children, action, incidencia, disabled = false }) {
    return (
        <form
            action={action}
            className="max-w-lg mx-auto mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-xl border border-gray-300 backdrop-blur-md"
            style={{
                background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                boxShadow: '10px 10px 20px #cbcbcb, -10px -10px 20px #ffffff',
            }}
        >
            <input type="hidden" name="id" value={incidencia?.id} />
            <fieldset disabled={disabled}>
                <div className="mb-6">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-800 mb-2">
                        Título
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Título"
                        defaultValue={incidencia?.titulo}
                        autoFocus
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-800 mb-2">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Descripción"
                        defaultValue={incidencia?.descripcion}
                        rows="4"
                    />
                </div>
                <div className="text-center mt-6">
                    <Button title="Crear Incidencia" />
                </div>
            </fieldset>
        </form>
    );
}

export default FormIncidencia;
