import "./card.css"

export default function Card({width,height, img,title,description,display, bgcolor,direction}){
    return <div style={{width:width,  gap:"1vh", height:height, padding:"2vh", display:display, flexDirection:direction, alignItems:"center" , backgroundColor:bgcolor, borderRadius:"20px"}}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}