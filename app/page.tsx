
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yukiyo Manga</h1>

        <nav className="flex gap-6">
          <a className="hover:text-green-400 cursor-pointer">Нүүр</a>
          <a className="hover:text-green-400 cursor-pointer">Цуврал</a>
          <a className="hover:text-green-400 cursor-pointer">Алдартай</a>
        </nav>
      </header>

      {/* Manga List */}
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-6">📚 Манга жагсаалт</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Manga 1 */}
          <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
            <img
              src="https://placehold.co/300x400"
              className="rounded-lg mb-2"
            />
            <p className="font-semibold">My First Manga</p>
          </div>

          {/* Manga 2 */}
          <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
            <img
              src="https://placehold.co/300x400"
              className="rounded-lg mb-2"
            />
            <p className="font-semibold">Yukiyo Story</p>
          </div>

        </div>
      </main>

    </div>
  );
} 