"use client";

import { useState } from "react";

export default function Admin() {

const [cover,setCover] = useState(null);
const [pages,setPages] = useState([]);

return (

<div style={{padding:40}}>

<h1>📤 Manga Upload</h1>

<h2>Манганы нэр</h2>
<input placeholder="Manga title" />

<h2>Cover зураг</h2>
<input 
type="file"
onChange={(e)=>setCover(e.target.files[0])}
/>

<h2>Chapter зургууд</h2>

<input 
type="file"
multiple
onChange={(e)=>setPages([...e.target.files])}
/>

<p>{pages.length} зураг сонгогдсон</p>

<button style={{
padding:"10px 20px",
marginTop:20,
background:"black",
color:"white"
}}>
Upload
</button>

</div>

);
}