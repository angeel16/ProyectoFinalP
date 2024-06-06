'use client';
import { useState } from 'react';
import { register } from '@/lib/actions';
import { signIn } from 'next-auth/react'; // signIn desde lado CLIENTE

function RegisterForm() {
    const [resultado, setResultado] = useState('');
    const [tipo, setTipo] = useState('');

    async function wrapper(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const message = await register(formData); // Server action
        if (message.success) {
            setTipo('success');
            setResultado(message.success);
            await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                callbackUrl: '/dashboard'
            });
        } else {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className="flex flex-col justify-center items-center space-y-4 mt-3">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="angel"
                    />
                </label>
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

            <button className="bg-black text-white px-4 py-2 rounded mb-4">Crear cuenta</button>
        </form>
    );
}

export default RegisterForm;
