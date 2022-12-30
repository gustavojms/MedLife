import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children, className='' }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? `text-cyanblue-300 text-xs font-bold inline-flex border-transparent leading-5 hover:text-cyanblue-600 focus:outline-none focus:text-cyanblue-600 transition duration-150 ease-in-out`
                    : `text-cyanblue-300 text-xs font-bold inline-flex border-transparent leading-5 hover:text-cyanblue-600 focus:outline-none focus:text-cyanblue-600 transition duration-150 ease-in-out`
                    + className
        }
        >
            {children}
        </Link>
    );
}
