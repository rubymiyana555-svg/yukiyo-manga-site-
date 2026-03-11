
export default function Reader(){

const pages = [
"/manga/manga1/chapter1/1.jpg",
"/manga/manga1/chapter1/2.jpg",
"/manga/manga1/chapter1/3.jpg"
];

return(

<div style={{background:"#000"}}>

{pages.map((img,i)=>(
<img
key={i}
src={img}
style={{
width:"100%",
maxWidth:"800px",
display:"block",
margin:"0 auto"
}}
/>
))}

</div>

);
}
