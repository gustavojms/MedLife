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
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
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
                    <NavLink href="/register" >
                        <SecondaryButton>
                            Cadastrar
                        </SecondaryButton>           
                    </NavLink>                   
                </div>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center py-8 w-96">
                        <h2 className="text-2xl font-bold">Entrar</h2>
                        <form className="mx-auto py-8" onSubmit={submit}>
                            <InputLabel forInput="email" value="Email" /> 
                            
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.email} className="mt-2" />
                            <InputLabel forInput="password" value="Password" />
                            
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />

                            <NavLink href="/register" className='text-left float-left'>
                                Não possui cadastro? Clique aqui
                            </NavLink>
                            {canResetPassword && (
                                <NavLink
                                href={route('password.request')}
                                className="text-right float-right"
                                >                                
                                    Esqueceu sua senha?  
                                </NavLink>
                            )}
                            
                            <PrimaryButton className='w-full h-10 mt-4 py-2 px-3' processing={processing}>
                                Entrar
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
