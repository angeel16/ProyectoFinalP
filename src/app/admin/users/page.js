import { auth } from "@/auth"
import { redirect } from "next/navigation"

async function page() {
    const sesion = await auth()

    if (sesion?.user.role !== 'ADMIN')
        redirect('/dashboard')

    return (
        <>
            <h1> A</h1>

        </>
    )
}

export default page