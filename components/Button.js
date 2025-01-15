export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {children}
      </button>
    );
  }