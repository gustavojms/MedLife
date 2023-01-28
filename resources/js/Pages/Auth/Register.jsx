import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';


import calendaryIcon from '../../../../public/callog.svg';
import diagnosticIcon from '../../../../public/hellog.svg';
import disponibilityIcon from '../../../../public/displog.svg';
import modifyIcon from '../../../../public/modiflog.svg';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        cpf: '',
        date_of_birth: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
    <div className="flex h-screen overflow-hidden">
        <Head title="Entrar" />
        <div className="w-1/2 bg-blue-500 bg-gradient-to-r from-cyanblue-600 via-cyanblue-500 to-cyanblue-400">
                <div className="flex items-center justify-center h-full">
                    
                    <div className="text-center py-8">
                        <h1 className="text-white text-4xl font-bold mb-20 text-left">MedLife</h1>
                        <ul className="text-white text-left">
                            <div>
                                <img className='inline-block mr-3' src={calendaryIcon} alt="" />
                                <li className='inline-block'>Marque sua consulta rapidamente</li>
                            </div>
                            <div>
                                <img className='mr-3 inline-block' src={diagnosticIcon} alt="" />
                                <li className='inline-block'>Acompanhe seu diagnóstico</li>
                            </div>
                            <div>
                                <img className='mr-3 inline-block' src={disponibilityIcon} alt="" />
                                <li className='inline-block'>Visualize a disponibilidade do seu médico</li>
                            </div>
                            <div>
                                <img className='mr-3 inline-block' src={modifyIcon} alt="" />
                                <li className='inline-block'>Facilidade para modificar seus atendimentos</li>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        <div className="w-1/2 py-8 bg-graylight-500">
            <div className="flex items-center justify-center h-full">
                <div className="text-center py-8 w-96">
                <h2 className="text-2xl font-bold">Cadastrar</h2>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="cpf" value="CPF" />

                            <TextInput
                                id="cpf"
                                type="text"
                                name="cpf"
                                value={data.cpf}
                                className="mt-1 block w-full"
                                autoComplete="cpf"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.cpf} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="phone" value="Telefone" />

                            <TextInput
                                id="phone"
                                type="text"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full"
                                autoComplete="phone"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.phone} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="date_of_birth" value="Data de Nascimento" />

                            <TextInput
                                id="date_of_birth"
                                type="date"
                                name="date_of_birth"
                                value={data.date_of_birth}
                                className="mt-1 block w-full"
                                autoComplete="date_of_birth"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.date_of_birth} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="password" value="Senha" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="password_confirmation" value="Confirmar Senha" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                            <NavLink
                                href={route('login')}
                                className='text-left float-left mt-2'                            >
                                Already registered?
                            </NavLink>
                            <PrimaryButton className='w-full h-10 mt-4 py-2 px-3' processing={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
