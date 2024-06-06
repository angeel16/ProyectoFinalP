'use client';
import Button from '@/components/button-form';
import { useState } from 'react';
import { login } from '@/lib/actions';

function LoginForm() {
    const [resultado, setResultado] = useState('');
    const [tipo, setTipo] = useState('');

    async function wrapper(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const message = await login(data); // Server action
        if (message?.success) {
            setTipo('success');
            setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className="flex flex-col justify-center items-center space-y-4 mt-3">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        placeholder="angel@mail.com"
                    />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Contraseña
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        placeholder="******"
                    />
                </label>
                <p className={`info ${tipo}`}>{resultado}</p>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded mb-4">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;
