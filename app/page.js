import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Head from "../_document";
export default function Home() {
  return (
    <div>
      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 콘텐츠 영역 */}
      <div className="bg-[#E9F2EC] flex-col items-center p-10">

      {/* 동영상 영역 */}
      <div className="relative w-full h-screen">
        <video 
          className="absolute inset-0 w-4/5 h-4/5 object-cover mx-auto" 
          autoPlay 
          loop 
          muted
        >
          <source src="https://incheon.world/assets/assets/videos/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

      {/* 메인 문구 */}
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-6xl text-black font-bold">INCHEON HEROES</h1>
        <p className="mt-4 text-black font-bold">
          도시 최초의 글로벌 NFT 프로젝트 : 블록체인 도시 인천의 지구지키기에 동참해 주세요!
        </p>
      </div>

      {/* 로그인 버튼 */}
      <div className="flex flex-col items-center p-5">
      <button
            className="bg-[#888D8A] text-white text-xl font-bold px-12 py-4 rounded-full hover:bg-[#222222] transition shadow-md"
          >
            로그인 먼저 해주세요.
      </button>
      </div>

      <div className="p-5"></div>

      {/* 리더보드 텍스트 */}
      <div className="flex flex-center justify-center">
      <img src="/icon1.png" alt="icon1 img" className="h-10 mr-1" />
      <h1 className="text-4xl text-black font-bold">Leader board</h1>
      <img src="/icon1.png" alt="icon1 img" className="h-10 mr-1" />
      </div>

      {/* 리더보드 테이블 */}
      <div className="flex justify-center items-center">
      <div className="w-[1165px] h-[820px] flex justify-center items-center space-y-10 p-5">
        <div className="flex flex-col justify-start bg-white rounded-xl w-5/6 h-5/6 p-5 shadow-md">
          <h1 className="text-2xl mb-4"></h1>
            <div className="flex justify-end items-center w-full space-x-2">
            <img src="/retry.png" alt="retry img" className="h-4 w-4" />
            <p className="text-gray-600 text-xs text-right ">
              last updated: 25.01.01 24:00
            </p>
            </div>

            <div className="p-2"></div>

            <button className="self-end bg-[#9BC4B8] text-gray-600 px-12 py-2 rounded-xl hover:bg-green-700 transition">
              <div className="flex justify-between items-center w-full">
              <span className="flex-grow text-center">레벨 랭킹</span>
              <img src="/triangle.png" alt="triangle img" className="h-3" />
              </div>
            </button>

            <div className="p-2"></div>
            
            <div className="w-[900px] h-[40px] flex justify-between bg-[#9BC4B8] text-gray-600 px-10 py-2 rounded-xl">
            <a className="text-black text-sm">
              No.
            </a>
            <a className="text-black text-sm">
              NFT No.
            </a>
            <a className="text-black text-sm">
              Level
            </a>
            <a className="text-black text-sm">
              Character
            </a>
            <a className="text-black text-sm">
              Account address
            </a>
            </div>

            <div className="p-2"></div>

            <div className="w-[900px] h-[450px] overflow-hidden rounded-lg border-2 border-gray-200">
              <table className="min-w-full table-auto">
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <img src="/1st.png" alt="1st img" className="h-15 mr-1 px-5 py-2" />
                    <td className="px-5 py-2 text-black">#107</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <img src="/2nd.png" alt="2nd img" className="h-15 mr-1 px-5 py-2" />
                    <td className="px-5 py-2 text-black">#54</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <img src="/3rd.png" alt="3rd img" className="h-15 mr-1 px-5 py-2" />
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">4</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">5</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">6</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">7</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">8</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-9 py-2 text-black">9</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-8 py-2 text-black">10</td>
                    <td className="px-5 py-2 text-black">#1906</td>
                    <td className="px-10 py-2 text-black">6</td>
                    <td className="px-10 py-2 text-black">comy</td>
                    <td className="px-15 py-2 text-black">0x35...4fe6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}