export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                ` bg-cyanblue-400 hover:bg-cyanblue-500 text-white text-base rounded-xl items-center border border-transparent focus:bg-cyanblue-500 active:bg-cyanblue-600 focus:outline-none focus:ring-2 focus:ring-cyanblue-300 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
