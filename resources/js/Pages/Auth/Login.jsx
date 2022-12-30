import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import NavLink from '@/Components/NavLink';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (

        <div className="flex h-screen overflow-hidden">
            <Head title="Entrar" />
            <div className="w-1/2 bg-blue-500 bg-gradient-to-r from-cyanblue-600 via-cyanblue-500 to-cyanblue-400">
                <div className="flex items-center justify-center h-full">
                    <div className="text-center py-8">
                        <h1 className="text-white text-4xl font-bold mb-4 text-left">MedLife</h1>
                        <ul className="text-white text-left">
                            <li>Marque sua consulta rapidamente</li>
                            <li>Acompanhe seu diagnóstico</li>
                            <li>Visualize a disponibilidade do seu médico</li>
                            <li>Facilidade para modificar seus atendimentos</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-1/2 py-8 bg-graylight-500">
                <div className="flex justify-end mr-8">
                    <SecondaryButton>
                        Cadastrar
                    </SecondaryButton>
                </div>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center py-8 w-96">
                        <h2 className="text-2xl font-bold">Entrar</h2>
                        <form className="mx-auto py-8">
                            <InputLabel htmlFor="email">
                                Email
                            </InputLabel>
                            <TextInput type="email" className="w-full h-10"/>
                            <InputLabel htmlFor="senha">
                                Senha
                            </InputLabel>
                            <TextInput type="password" className="mb-6 w-full h-10"/>
                            <NavLink href="#" className='text-left float-left'>
                                Não possui cadastro? Clique aqui
                            </NavLink>
                            <NavLink href="#" className="text-right float-right">
                                Esqueceu sua senha?
                            </NavLink>
                            
                            <PrimaryButton className='w-full h-10 mt-4 py-2 px-3'>
                                Entrar
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
