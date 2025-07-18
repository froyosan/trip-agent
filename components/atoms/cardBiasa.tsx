import Image from "next/image";
import { twMerge } from "tailwind-merge";


type CardProps = {
  imageSrc: string
  alt?: string
  title?: string
  desc?: string
  children?: React.ReactNode
}

export default function CardBiasa ({ imageSrc, alt = "image", title, desc, children }: CardProps) {
  return (
    <div className={twMerge("bg-white rounded-xl shadow-lg p-6 max-w-md flex items-start space-x-4")}>
        <div className="w-16 h-16 relative flex-shrink-0">
            <Image
            src={imageSrc}
            width={150}
            height={150}
            alt={alt}
            loading="lazy"
            className="object-contain rounded-md"/>
        </div>
        <div className="pl-[10px] align-self-center">
            {title && <h2 className="text-black font-bold text-base">{title}</h2>}
            {desc && <p className="text-gray-600 text-sm mt-1">{desc}</p>}

            {children && <div className="mt-4">{children}</div>}
        </div>
    </div>
    )
}
