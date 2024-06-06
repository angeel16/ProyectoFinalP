// import { getIncidencia, getTecnicos } from '@/lib/actions'

// async function ListaTecnicos({ incidenciaId, disabled }) {
//     const tecnicos = await getTecnicos()

//     let incidencia = null;
//     let tecincidencia = [];
//     if (incidenciaId) {
//         incidencia = await getIncidencia(incidenciaId)
//         tecincidencia = incidencia.tecnicos.map(p => p.id);
//     }


//     return (
//         <fieldset disabled={disabled}>
//             <legend>Tecnicos</legend>
//             {tecnicos?.map((tecnico) => (
//                 <div key={tecnico.id}>
//                     <p>
//                         {tecincidencia.includes(tecnico.id)
//                             ? <input type='checkbox' name={tecnico.id} value={tecnico.id} defaultChecked />
//                             : <input type='checkbox' name={tecnico.id} value={tecnico.id} />
//                         }
//                         {tecnico.nombre}
//                     </p>
//                 </div>
//             ))}
//         </fieldset>
//     )
// }

// export default ListaTecnicos