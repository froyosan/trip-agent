import Image from "next/image";
import Link from "next/link";

export default function Hero () {
  return (
    <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image src="/hero.png" alt="hero image" fill className="object-cover object-center w-full h-full"/>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize">
                Jalan jalan dong bos
            </h1>
            <p className="texl-xl text-gray-300 mb-8">
                Ini paragraf
            </p>
            <div className="flex gap-5">
                <Link href="/contact" className="bg-transparent border border-blue-300 text-white hover:bg-blue-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">
                    Ayo Berangkat
                </Link>
            </div>
        </div>
    </div>
  );
}
