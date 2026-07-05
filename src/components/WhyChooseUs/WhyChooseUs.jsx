import "./WhyChooseUs.css";

function WhyChooseUs(){

const data=[

{icon:"☕",title:"Premium Coffee",text:"Freshly roasted Ethiopian beans served every day."},

{icon:"🍛",title:"Authentic Cuisine",text:"Traditional recipes prepared with fresh ingredients."},

{icon:"⚡",title:"Fast Ordering",text:"Quick digital ordering with a smooth customer experience."},

{icon:"❤️",title:"Warm Hospitality",text:"Friendly service that makes every visit memorable."}

];

return(

<section className="why">

<h2>Why Choose Miracle Cafe</h2>

<div className="why-grid">

{data.map((item,index)=>(

<div className="why-card" key={index}>

<div className="icon">{item.icon}</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>

);

}

export default WhyChooseUs;