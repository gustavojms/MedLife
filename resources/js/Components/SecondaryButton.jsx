export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `bg-cyanblue-400 hover:bg-cyanblue-500 text-sm text-white py-2 px-8 rounded-2xl items-center border border-transparent font-semibold focus:bg-cyanblue-500 active:bg-cyanblue-600 focus:outline-none focus:ring-2 focus:ring-cyanblue-300 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
