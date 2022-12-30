export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block text-left text-base mt-4 mb-2 text-graylight-400 ` + className}>
            {value ? value : children}
        </label>
    );
}
