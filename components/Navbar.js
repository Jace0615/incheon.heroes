export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-4 flex w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <img src="/logo.png" alt="translate img" className="h-15 mr-0" />

        {/* 메뉴 */}
        <div className="hidden md:flex space-x-8">
        <div className="flex items-between space-x-40">
          <div>
            <a href="/history" className="text-black hover:pointer hover:underline font-bold">
              HISTORY
            </a>
          </div>
          <div>
          <a href="/info" className="text-black hover:pointer hover:underline font-bold">
          INFO
            </a>
          </div>
          <div>
            <a href="/shop" className="text-black hover:pointer hover:underline font-bold">
              SHOP
            </a>
          </div>
          <div>
            <a href="/DAO" className="text-black hover:pointer hover:underline font-bold">
              DAO
            </a>
          </div>
          <div>
            <a href="/info" className="text-black hover:pointer hover:underline font-bold">
              INFO
            </a>
          </div>
        </div>
        </div>

        {/* 언어, 연결 */}
        <div className="hidden md:flex space-x-8">
        <div className="flex items-center space-x-10">
            <a href="/connnet" className="text-black hover:pointer">
            <img src="/connect.png" alt="connect img" className="h-3.5 mr-0" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
          <img src="/translate lg.png" alt="translate img" className="h-5 mr-0" />
            <a href="/events" className="text-black hover:pointer font-bold">
              KOR
            </a>
        </div>
        </div>
      </div>
    </nav>
  );
}