import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";

export default function Historico() {

    const { appointments } = usePage().props;
    const doctors = {
        1:"Dr. Antonio",
        2:"Dra. Angela",
        3:"Dr. Pedro",
        4:"Dr. Carlos",
        5:"Dra. Patricia",
        6:"Dra. Patricia",
        7:"Dra. Rosa",
    };


    const consultory_doctors = {
        1:"Vida e Imagem",
        2:"Clinica da mulher",
        3: "Sorriso Feliz",
        4: "Cerpe",
        5: "Saude para Você",
        6: "Denticia",
        7: "Dr. Marcos",
    }

    return (
        <AuthenticatedLayout>
            <div className="flex justify-center mt-8">
                <table className="table-auto text-left rounded-lg shadow-lg">
                    <thead className="bg-cyanblue-400">
                        <tr className="text-white">
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Hora</th>
                            <th className="px-4 py-2">Médico</th>
                            <th className="px-4 py-2">Consultório</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(({ date, time,  doctor_id }) => (
                            
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">{ date }</td>
                                <td className="border px-4 py-2">{ time }</td>
                                <td className="border px-4 py-2">{ doctors [doctor_id] }</td>
                                <td className="border px-4 py-2">{ consultory_doctors [doctor_id] }</td>
                            </tr>
                        ))}

                        {appointments.length === 0 && (
                            <tr>
                                <td
                                    className="px-6 py-4 border-t"
                                    colSpan="4"
                                >
                                    Nenhuma consulta encontrada.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}