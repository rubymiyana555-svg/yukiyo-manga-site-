import Link from "next/link";

export default function Home() {

const mangas = [
 { id: "manga1", title: "Shadow Blade", cover: "/covers/manga1.jpg" },
 { id: "manga2", title: "Yukiyo Story", cover: "/covers/manga2.jpg" }
];

return (

<div style={{fontFamily:"sans-serif"}}>

{/* Header */}
<div style={{
background:"#111",
color:"white",
padding:"15px 30px",
display:"flex",
justifyContent:"space-between"
}}>
<h2>Yukiyo Manga</h2>
<div>
<a href="/" style={{marginRight:20,color:"white"}}>Home</a>
<a href="#" style={{marginRight:20,color:"white"}}>Series</a>
<a href="#" style={{color:"white"}}>Trending</a>
</div>
</div>

{/* Manga Grid */}
<div style={{
padding:40,
display:"grid",
gridTemplateColumns:"repeat(auto-fill,150px)",
gap:20
}}>

{mangas.map((manga)=>(
<Link key={manga.id} href={`/manga/${manga.id}`}>

<div>

<img
src={manga.cover}
style={{width:"150px",borderRadius:"8px"}}
/>

<p>{manga.title}</p>

</div>

</Link>
))}

</div>

</div>

);
}
