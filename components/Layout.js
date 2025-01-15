export default function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Incheon World</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2025 Incheon World</p>
        </footer>
      </div>
    );
  }