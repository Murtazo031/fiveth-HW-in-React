import "./heroSection.css"
import Button from "@/Components/Additional/Button/button";
import heroimg from "@/app/assets/img/heroimg.png";

export default function HeroSection () {
    return <section className="herosection">
        <Right></Right>
        <Left></Left>
    </section>
}

function Right() {
    return<> <div className="right">
        <h1>Школа {<span>{"{"}</span>}{"програмирования"}{<span>{"}"}</span>} для тех, кому нужны реальные навыки,
        а не просто сертификат</h1>
    <p>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
   <Button bgcolor="#F15525" color="white" Children = "Пройти тестирование" padding={"2vh 6vh"}></Button>
    </div>
    </>
}

function Left() {
    return <img src={heroimg} alt="" />
}
