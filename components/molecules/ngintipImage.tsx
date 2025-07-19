"use client"

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Ngintip () {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.2 }
    )

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect()
    }, [])

    return (
        <div
        ref={ref}
        className={`transition-all duration-1000 ease-in-out overflow-hidden rounded-lg shadow-xl w-full h-96 relative ${isVisible? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Image
            src=""
            alt=""
            fill
            className="object-cover"
        />
        </div>
    )
}
