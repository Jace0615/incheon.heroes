export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white px-6 py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* 로고 */}
          <div className="text-2xl font-bold">Incheon World</div>
  
          {/* 메뉴 */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
  
          {/* 모바일 메뉴 버튼 */}
          <button className="block md:hidden bg-white text-blue-600 px-4 py-2 rounded">
            Menu
          </button>
        </div>
      </nav>
    );
  }