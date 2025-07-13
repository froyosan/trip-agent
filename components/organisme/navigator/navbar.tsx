import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/organisme/navigator/navlink";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
        <div className="max-w-screen-xxl mx-auto flex flex-wrap items-center justify-between p-4">
            <Link href="/">
                <Image src="/lego.png" width={128} height={49} alt="logo" priority>
                </Image> 
            </Link>
          <div className="max-w-screen-xxl mx-auto flex flex-wrap items-center justify-between p-4">
          <NavLink/>
          </div>
        </div>
    </div>
  );
}
