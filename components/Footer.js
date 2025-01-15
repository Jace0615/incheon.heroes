export default function Footer() {
    return (
      <footer className="bg-[#222222] p-6">
        <div className="flex justify-between items-center">

          {/* 로고, 주소 영역 */}
          <div className="hidden md:flex space-x-5">
          <div className="flex flex-col items-center space-y-5">

          {/* 로고 */}
          <div className="flex flex items-center space-y-5">
          <img src="/logo.png" alt="logo img" className="h-18 mr-0" />
          </div>

          {/* 주소 */}
          <div className="hidden md:flex space-x-5">
          <div className="flex flex-col items-center space-y-0">
          <p className="text-gray-600 text-sm leading-tight">
            21554 인천광역시 남동구 정각로 29(구월동) TEL:(032)120</p>
          <p className="text-gray-600 text-sm leading-tight"> 
            © Incheon Metropolitan City. All rights reserved.</p>
            </div>
            </div>
            </div>
          </div>

          {/* 아이콘 영역 */}
            <div className="flex items-center space-x-5">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <a href="/mail" className="hover:pointer">
              <img src="/mail.png" alt="email img" className="w-5 h-5 rounded-center object-cover" />
              </a>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <a href="/twitter" className="hover:pointer">
              <img src="/twitter.png" alt="twitter img" className="w-10 h-10 object-cover" />
              </a>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <a href="/discord" className="hover:pointer">
              <img src="/discord.png" alt="discord img" className="w-10 h-10 object-cover" />
              </a>
              </div>
              </div>
          </div>
      </footer>
    );
  }