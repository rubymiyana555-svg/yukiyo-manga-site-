import Link from "next/link";

export default function Home() {

const mangas = [
 { id: "manga1", title: "Shadow Blade", cover: "/covers/manga1.jpg" },
 { id: "manga2", title: "Yukiyo Story", cover: "/covers/manga2.jpg" }
];

return (

<div style={{padding:40}}>

<h1>Yukiyo Manga</h1>

<h2>жагсаалт</h2>

<div style={{display:"flex",gap:20}}>

{mangas.map((manga)=>(
<Link key={manga.id} href={`/manga/${manga.id}`}>

<div>

<img src={manga.cover} width="150"/>

<p>{manga.title}</p>

</div>

</Link>
))}

</div>

</div>

);

}