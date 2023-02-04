import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";

export default function Historico() {

    const { appointments } = usePage().props;


    return (
        <AuthenticatedLayout>
            <div className="flex justify-center mt-8">
                <table className="table-auto text-left">
                    <thead className="bg-white">
                        <tr>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Hora</th>
                            <th className="px-4 py-2">Médico</th>
                            <th className="px-4 py-2">Consultório</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(({ date, time, doctor, consultorio }) => (
                            <tr>
                                <td className="border px-4 py-2">{ date }</td>
                                <td className="border px-4 py-2">{ time }</td>
                                <td className="border px-4 py-2">{ doctor }</td>
                                <td className="border px-4 py-2">{ consultorio }</td>
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