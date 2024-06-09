'use client'; // Indica que este es un componente cliente

import { useRouter } from 'next/navigation'; // Usa la navegación de next/navigation
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';

const FormIncidencia = ({ initialData }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: initialData,
    });
    const router = useRouter();

    useEffect(() => {
        if (initialData) {
            Object.keys(initialData).forEach(key => {
                setValue(key, initialData[key]);
            });
        }
    }, [initialData, setValue]);

    const onSubmit = async (data) => {
        try {
            await axios.put(`/api/incidencias/${initialData.id}`, data);
            router.push('/incidencias'); // Redirigir después de la actualización
        } catch (error) {
            console.error('Error updating incidence:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Título</label>
                <input {...register('titulo', { required: true })} />
                {errors.titulo && <span>Este campo es obligatorio</span>}
            </div>
            <div>
                <label>Descripción</label>
                <textarea {...register('descripcion', { required: true })}></textarea>
                {errors.descripcion && <span>Este campo es obligatorio</span>}
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default FormIncidencia;
