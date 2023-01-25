import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import homeIcon from '../../../public/home.svg';
import calendaryIcon from '../../../public/calendary.svg';
import appointmentIcon from '../../../public/appointment.svg';
import profileIcon from '../../../public/user.svg'

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        
        <div className="flex h-screen overflow-hidden bg-graylight-500">
            <div className="w-1/6 bg-blue-500 bg-gradient-to-r from-cyanblue-600 via-cyanblue-500 to-cyanblue-400">
                <div className="flex items-start justify-center h-full">
                                      
                    <div className="text-left py-20 ">
                        <Dropdown>
                            
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <div className='text-white focus:shadow-inner'>
                                        <img className="inline-block" src={profileIcon} alt="" />
                                    </div>      
                                </span>
                            </Dropdown.Trigger>
                            
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                            
                        </Dropdown>
                        
                        <Link href='dashboard'>
                            <div className=' text-white my-5 mt-24 focus:shadow-inner'>
                                <img className="inline-block mr-5" src={homeIcon} alt="" />
                                Pagina Inicial
                            </div>
                        </Link>
                        <Link href='calendario'>
                            <div className=' text-white my-5 '>
                            <img className="inline-block mr-5" src={calendaryIcon} alt="" />
                                Calendário
                            </div>
                        </Link>
                        <Link href='marcar'>
                            <div className=' text-white my-5 '>
                                <img  className="inline-block mr-5" src={appointmentIcon} alt="" />                                
                                Marcar consulta                               
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <main className='h-screen w-screen'>{children}</main>
        </div>
    );
}
