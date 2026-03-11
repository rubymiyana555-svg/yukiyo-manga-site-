export default function Home() {
  const series = [
    {
      id: 1,
      title: "Yukiyo",
      image: "https://placehold.co/300x400"
    },
    {
      id: 2,
      title: "Dark Hero",
      image: "https://placehold.co/300x400"
    },
    {
      id: 3,
      title: "Magic World",
      image: "https://placehold.co/300x400"
    }
  ];

  return (
    <main style={{background:"#111",minHeight:"100vh",color:"white",padding:"40px"}}>
      <h1 style={{fontSize:"40px",marginBottom:"30px"}}>WEBTOON</h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,200px)",
          gap:"20px"
        }}
      >
        {series.map((item) => (
          <a key={item.id} href={`/manga/${item.id}`} style={{textDecoration:"none",color:"white"}}>
            <div>
              <img src={item.image} style={{width:"200px",borderRadius:"10px"}} />
              <p style={{marginTop:"10px"}}>{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}