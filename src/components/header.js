import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';

async function Header() {
    const session = await auth();

    return (
        <nav className="bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="ml-12 text-white hover:text-gray-300">
                            Inicio
                        </Link>

                        <Link href="/dashboard" className="ml-10 text-white hover:text-gray-300">
                            Dashboard
                        </Link>

                        {session?.user?.role === 'ADMIN' && (
                            <>
                                <Link legacyBehavior href="/admin">
                                    <a className="ml-4 text-white hover:text-gray-300">Admin Panel</a>
                                </Link>
                                <Link legacyBehavior href="/admin/users">
                                    <a className="ml-4 text-white hover:text-gray-300">Gestionar Incidencias</a>
                                </Link>
                                <Link legacyBehavior href="/admin/settings">
                                    <a className="ml-4 text-white hover:text-gray-300">Configuraciones</a>
                                </Link>
                                <Link legacyBehavior href="/">
                                    <a className="ml-4 text-white hover:text-gray-300">Ver Reportes</a>
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex items-center space-x-4">
                        {session ? (
                            <form>
                                <button type="submit" className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" formAction={logout}>
                                    Cerrar Sesión
                                </button>
                            </form>
                        ) : (
                            <div className="flex">
                                <Link href="/auth/register" className="text-white hover:text-gray-300">
                                    Registrarse
                                </Link>
                                <Link href="/auth/login" className="ml-4 text-white hover:text-gray-300">
                                    Iniciar Sesión
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
