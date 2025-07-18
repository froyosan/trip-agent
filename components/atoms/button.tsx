import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    className : string
    children : React.ReactNode
}

export default function Button ({ className ='', children } : ButtonProps) {
        return (
            <button 
            className={twMerge ("text-white bg-blue-900 hover:bg-blue-500 p-3 w-full text-center rounded-sm", className )}
            >
                {children}
            </button>
        )
}
