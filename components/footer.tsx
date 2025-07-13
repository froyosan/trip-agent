import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gray-900">
        <div className="max-w-screen-xxl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div>
                    <Link href="/">
                        <Image src="/steam.png" width={128} height={49} alt="logo"/>
                    </Link>
                    <p className="text-gray-400">
                        Jametol adalah Jamet yang sangat kontol
                    </p>
                </div>
                <div className="flex gap-20">
                    <div className="flex-1 md:flex-none">
                        <h4 className="mb-8 text-xl font-semibold text-white">Open Trips Favorite</h4>
                        <ul className="list-item space-y-5 text-gray-400">
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                              <li>
                                <Link href="/openTrips">Open Trips</Link>
                            </li>
                              <li>
                                <Link href="/privateTrips">Private Trips</Link>
                            </li>
                              <li>
                                <Link href="/about">Tentang Kami</Link>
                            </li>
                              <li>
                                <Link href="/contact">Kontak</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 md:flex-none">
                        <h4 className="mb-8 text-xl font-semibold text-white">Private Trips Favorite</h4>
                        <ul className="list-item space-y-5 text-gray-400">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                              <li>
                                <Link href="/openTrips">Open Trips</Link>
                            </li>
                              <li>
                                <Link href="/privateTrips">Private Trips</Link>
                            </li>
                              <li>
                                <Link href="/about">Tentang Kami</Link>
                            </li>
                              <li>
                                <Link href="/contact">Kontak</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h4 className="mb-8 text-xl font-semibold text-white">Update Berita dari Kami</h4>
                    <p className="text-gray-400">
                        blablabla
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <input type="text" name="email" className="w-full p-3 rounded-sm bg-white" placeholder="karmendos@gmail.com"/>
                        </div>
                        <button className="bg-blue-900 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-blue-500">Daftar Sekarang</button>
                    </form>
                </div>
            </div>
        </div>
        <div className=""></div>
        <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
            &copy; Copyright 2025 | JAMETOL
        </div>
    </footer>
  );
}
