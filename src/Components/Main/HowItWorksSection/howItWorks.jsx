import "./howItWorks.css";
import howimg from "@/app/assets/img/howimg.png";
import Button from "@/Components/Additional/Button/button";

export default function HowItWorks() {
    return <section className="howsec">
        <div className="howdiv">
        <h2>Как происходит обучение на YtYt?</h2>
          <p>Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.
          </p>
          <img src={howimg} alt="" />
        </div>
        <div className="downCard">
            <div>
                <h1>01</h1>
                <h4>Весь материал разбит на небольшие уроки</h4>
                <p>Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
            </div>
            <div>
                <h1>02</h1>
                <h4>Весь материал разбит на небольшие уроки</h4>
                <p>Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
            </div>
            <div>
                <h1>03</h1>
                <h4>Весь материал разбит на небольшие уроки</h4>
                <p>Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
            </div>
        </div>
        <div style={{display:"flex", gap:"5vh", width:"45%", margin:"auto", marginTop:"3vh",  backgroundColor:"#EAF2F5", borderRadius:"20px", padding:"2vh" ,alignItems:"center", justifyContent:"center"}}>
        <Button bgcolor={"#F15525"} color={"white"} padding={"2vh"} Children={"Начать обучение"}></Button>
        <p>Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</p>
        </div>
    </section>
}