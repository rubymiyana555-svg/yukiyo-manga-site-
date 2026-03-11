export default function Reader(){

const pages = [
"/manga/manga1/chapter1/1.jpg",
"/manga/manga1/chapter1/2.jpg",
"/manga/manga1/chapter1/3.jpg"
];

return(

<div style={{
background:"#000",
width:"100%",
display:"flex",
flexDirection:"column",
alignItems:"center"
}}>

{pages.map((img,i)=>(
<img
key={i}
src={img}
style={{
width:"100%",
maxWidth:"900px",
display:"block"
}}
/>
))}

</div>

);
}
