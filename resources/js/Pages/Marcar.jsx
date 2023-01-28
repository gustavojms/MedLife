import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/inertia-react";



export default function Marcar(props){

     function handleSubmit(e) {
        e.preventDefault();
        post(route("appointments.store"));
    }

    const { data, setData, errors, post } = useForm({
        user_id:1,
        doctor_id: "",
        date: "",
        observations: "",
    });


    return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
            {/* <Head title="Marcar" /> */}
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Médico</label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2"
                                            label="Doctor"
                                            name="doctor"
                                            value={data.doctor_id}
                                            onChange={(e) =>
                                                setData("doctor_id", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.doctor_id}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Data</label>
                                        <input
                                            type="date"
                                            className="w-full rounded"
                                            label="date"
                                            name="date"
                                            errors={errors.date}
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.date}
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <label className="">Observations</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="observations"
                                            name="observations"
                                            errors={errors.observations}
                                            value={data.observations}
                                            onChange={(e) =>
                                                setData("observations", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.observations}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
    </AuthenticatedLayout>
    );
}