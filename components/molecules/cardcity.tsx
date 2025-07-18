"use client"

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";


type CardCityProps = {
    imageSrc: string
    alt?: string
    title?: string
    href?: string
    children?: React.ReactNode

}

export default function Card({ imageSrc, alt = "image", title, children, href }: CardCityProps) {
  return (
    <Link type="button" href={""} className={ twMerge ("bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm")}>
        <div className="h-[388px] w-auto rounded-t-sm relative">
        <Image src={imageSrc}
          alt={alt}
          fill
          loading="lazy"
          className="w-full h-full object-cover rounded-t-sm"/>
          {title && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="bg-black/30 text-white px-14 py-3 rounded-lg text-2xl font-semibold max-w-fit">
              {title}
            </h2>
          </div>
        )}
      </div>
      {children && <div className="p-4">{children}</div>}
    </Link>
  );
}
