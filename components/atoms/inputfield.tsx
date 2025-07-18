import { twMerge } from "tailwind-merge"

type InputFieldProps = {
    className? : string
    children? : React.ReactNode
    type? : string
    name? : string
    value? : string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder? : string
}

export default function InputField ({ className ='' , children , type = 'text' , name, value, onChange, placeholder } : InputFieldProps) {
        return (
            <div className={`flex flex-col gap-1 ${className}`}>
            {children && <label className="text-sm font-medium">{children}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-3 rounded-sm bg-white"
            />
            </div>
        )
}
