export default function Home() {
  const mangas = [
    { id: 1, title: "Yukiyo Manga", cover: "/cover1.jpg" },
    { id: 2, title: "Shadow Blade", cover: "/cover2.jpg" },
    { id: 3, title: "Dragon Spirit", cover: "/cover3.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between p-6 bg-zinc-900">
        <h1 className="text-2xl font-bold">Yukiyo Manga</h1>

        <nav className="flex gap-6">
          <a>Нүүр</a>
          <a>Цуврал</a>
          <a>Genre</a>
        </nav>
      </header>

      {/* BANNER */}
      <div className="w-full h-[300px] bg-zinc-800 flex items-center justify-center text-3xl font-bold">
        Featured Manga
      </div>

      {/* TRENDING */}
      <section className="p-8">
        <h2 className="text-2xl mb-6">🔥 Trending Манга</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mangas.map((manga) => (
            <a key={manga.id} href={`/manga/${manga.id}`}>
              <img
                src={manga.cover}
                className="rounded-lg"
              />
              <p className="mt-2">{manga.title}</p>
            </a>
          ))}
        </div>
      </section>

      {/* LATEST CHAPTER */}
      <section className="p-8">
        <h2 className="text-2xl mb-4">📚 Latest Chapter</h2>

        <ul className="space-y-2">
          <li>Yukiyo Manga - Chapter 3</li>
          <li>Shadow Blade - Chapter 10</li>
          <li>Dragon Spirit - Chapter 5</li>
        </ul>
      </section>

      {/* GENRE */}
      <section className="p-8">
        <h2 className="text-2xl mb-4">🎴 Genre</h2>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-zinc-800 px-4 py-2 rounded">Action</button>
          <button className="bg-zinc-800 px-4 py-2 rounded">Romance</button>
          <button className="bg-zinc-800 px-4 py-2 rounded">Fantasy</button>
          <button className="bg-zinc-800 px-4 py-2 rounded">Comedy</button>
        </div>
      </section>

    </div>
  );
}
{/* Latest Chapter */}
<section className="p-8">
  <h2 className="text-2xl mb-4">📚 Сүүлийн бүлгүүд</h2>

  <ul className="space-y-2">
    <li>Yukiyo Manga - Chapter 3</li>
    <li>Shadow Blade - Chapter 10</li>
    <li>Dragon Spirit - Chapter 5</li>
  </ul>
</section>
{/* Genre */}
<section className="p-8">
  <h2 className="text-2xl mb-4">🎴 Төрөл</h2>

  <div className="flex gap-4 flex-wrap">
    <button className="bg-zinc-800 px-4 py-2 rounded">Action</button>
    <button className="bg-zinc-800 px-4 py-2 rounded">Romance</button>
    <button className="bg-zinc-800 px-4 py-2 rounded">Fantasy</button>
    <button className="bg-zinc-800 px-4 py-2 rounded">Comedy</button>
  </div>
</section>