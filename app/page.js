import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
export default function Home() {
  return (
    <div>
      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to Incheon World</h1>
        <p className="mt-4 text-lg">
          Discover the beauty of Incheon and explore its vibrant culture.
        </p>
      </main>
      <Footer />
    </div>
  );
}