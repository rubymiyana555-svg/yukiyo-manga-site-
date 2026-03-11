export default function Reader(){

const pages = [
"/manga/manga1/chapter1/1.jpg",
"/manga/manga1/chapter1/2.jpg",
"/manga/manga1/chapter1/3.jpg"
];

return(

<div style={{
background:"black",
padding:20
}}>

{pages.map((img,i)=>(
<img
key={i}
src={img}
style={{
width:"100%",
maxWidth:"800px",
display:"block",
margin:"auto"
}}
/>
))}

</div>

);
}