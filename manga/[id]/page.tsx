import Link from "next/link";

export default function MangaPage(){

const chapters = [
 { id:"chapter1", title:"Chapter 1"}
];

return(

<div style={{padding:40}}>

<h1>📖 Manga Page</h1>

<h2>Chapters</h2>

{chapters.map((ch)=>(
<div key={ch.id}>

<Link href={`/reader?ch=${ch.id}`}>
{ch.title}

</Link>

</div>
))}

</div>

);
}