export default function Home() {
  const mangas = [
    { id: 1, title: "Yukiyo Manga" },
    { id: 2, title: "My First Manga" }
  ];

  return (
    <main style={{padding:"40px"}}>
      <h1>📚 Manga List</h1>

      {mangas.map((manga) => (
        <div key={manga.id} style={{margin:"20px 0"}}>
          <a href={`/manga/${manga.id}`}>
            {manga.title}
          </a>
        </div>
      ))}
    </main>
  );
}