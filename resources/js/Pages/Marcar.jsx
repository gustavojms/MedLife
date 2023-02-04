import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/inertia-react";



export default function Marcar(props){

     function handleSubmit(e) {
        e.preventDefault();
        post(route("appointments.store"));
    }

    const { data, setData, errors, post } = useForm({
        user_id:"",
        doctor_id: "",
        date: "",
        observations: "",
        time: "",
    });


    return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
            {/* <Head title="Marcar" /> */}
  
            <div className="py-12">
                <div className="w-3/4 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Médico</label>
                                        <select name="doctor" 
                                        id="doctor" 
                                        className="w-full px-4 py-2 rounded"
                                        onChange={(e) =>
                                        setData("doctor_id", e.target.value)}
                                        value={data.doctor_id}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="1">Dr. Antonio - Vida e Imagem</option>
                                            <option value="2">Dra. Angela - Clínica da Mulher</option>
                                            <option value="3">Dr. Pedro - Sorriso Feliz</option>
                                            <option value="4">Dr. Carlos - Cerpe</option>
                                            <option value="5">Dra. Patricia - Saúde para você</option>
                                            <option value="6">Dra. Rosa - Denticia</option>
                                            <option value="7">Dr. Marcos - Ortopédico</option>
                                        </select>
                                        
                                        <span className="text-red-600">
                                            {errors.doctor_id}
                                        </span>
                                    </div>
                                    <div className="mb-4">
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
                                    <div className="mb-4">
                                        <label className="">Horário</label>
                                        <select name="time" 
                                        id="time" 
                                        className="w-full  rounded"
                                        onChange={(e) =>
                                        setData("time", e.target.value)}
                                        value={data.time}
                                        >
                                            <option value="">Selecione</option>
                                            <option value={"08:00"}>08:00</option>
                                            <option value={"10:00"}>10:00</option>
                                            <option value={"13:00"}>13:00</option>
                                            <option value={"14:00"}>14:00</option>
                                            <option value={"15:00"}>15:00</option>
                                            <option value={"09:00"}>09:00</option>
                                            <option value={"11:00"}>11:00</option>
                                        </select>
                                        
                                        <span className="text-red-600">
                                            {errors.time}
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <label className="">Observações</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded resize-none p-8"
                                            label="observations"
                                            name="observations"
                                            errors={errors.observations}
                                            value={data.observations}
                                            onChange={(e) =>
                                                setData("observations", e.target.value)
                                            }
                                            placeholder="Descreva como se sente..."
                                        />
                                        <span className="text-red-600">
                                            {errors.observations}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 text-white bg-cyanblue-400 rounded"
                                    >
                                        Marcar
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