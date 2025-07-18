

export default function ProfileUs () {
  return (
    <section className="bg-[#edf2f4] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 shadow-md rounded-md overflow-hidden">
          <div className="relative">
            <img src="/team.png" alt="profile" className="w-full max-w-sm object-cover"/>
            <div className="absolute top-0 left-0 bg-black/50 text-white text-sm font-semibold px-2 py-1 rounded-br-md">
              Karmendos
            </div>
          </div>
        </div>
        <div className="max-w-2xl text-justify">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  )
}
