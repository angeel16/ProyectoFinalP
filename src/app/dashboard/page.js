import { auth } from "@/auth";

async function page() {
    const sesion = await auth();

    if (!sesion) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    const isAdmin = sesion.user.role === 'ADMIN';

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            <div className="container mx-auto p-4 text-center mt-12">
                <h1 className="text-3xl font-bold mb-4">🔑 Dashboard</h1>
                <p className="text-lg">Name: {sesion.user.name}</p>
                <p className="text-lg">Email: {sesion.user.email}</p>
                <p className="text-lg">Role: {sesion.user.role}</p>
                <img
                    src={sesion.user.image}
                    alt="User Avatar"
                    className="mt-4 rounded-full h-40 w-40 object-cover mx-auto"
                />

                {isAdmin ? <AdminContent /> : <UserContent />}
            </div>
        </div>
    );
}

function AdminContent() {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <p className="text-lg">Here you can manage users, settings, and more.</p>
            {/* Agrega más contenido exclusivo para administradores aquí */}
        </div>
    );
}

function UserContent() {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
            <p className="text-lg">Welcome to your dashboard. Here you can view your activities and settings.</p>
            {/* Agrega más contenido exclusivo para usuarios aquí */}
        </div>
    );
}

export default page;
