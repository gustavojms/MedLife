import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Historico() {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-center mt-8">
                <table className="table-auto text-left">
                    <thead className="bg-white">
                        <tr>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Hora</th>
                            <th className="px-4 py-2">Médico</th>
                            <th className="px-4 py-2">Clínica</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}