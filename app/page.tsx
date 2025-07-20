import Hero from "@/components/organisme/sections/hero/hero";
import CardBiasa from "@/components/atoms/cardBiasa";
import ProfileUs from "@/components/organisme/sections/profile/profile";
import AccordionPage from "@/components/organisme/sections/faq/faq";
import CardPictures from "@/components/molecules/cardPictures";


export default function Home() {
  return (
    <div className="">
        <Hero/>
        <div className="mt-16">
            <div className="text-center">
                <h1 className="text-3xl font-bold uppercase">Paket Open Trip & Private Trip di Indonesia</h1>
            </div>
            <div>
                <CardPictures />
            </div>
        </div>
            <div className="mt-16">
            <div className="text-center">
                <ProfileUs/>
            </div>
        </div>
        <div className="bg-[url('/borobudur.png')] bg-cover bg-center bg-fixed h-[500px] flex items-center justify-center">
            <div className="text-center">
            <h2 className="text-white text-3xl font-semibold bg-black/30 px-1 py-4 rounded-lg inline-block">Kenapa Mereka Memilih Kami</h2>
            <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto text-left">
                <div className="grid gap-7 md:grid-cols-3">
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                <CardBiasa imageSrc="/maps.png" alt="Image logo" title="Destinasi Terbaik" desc="Destinasi wisata alam terbaik Indonesia untuk pengalaman liburan terbaik anda"/>
                </div>
            </div>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <AccordionPage/>
        </div>
    </div>
  );
}
