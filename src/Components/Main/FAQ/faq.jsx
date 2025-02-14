import Card from "@/Components/Additional/Card/card";
import "./faq.css";
import faqimg from "@/app/assets/img/faqimg.png";
import coding from "@/app/assets/img/coding.png";

export default function Faq() {
  return (
    <section className="faq">
      <Card bgcolor={"#EAF2F5"} width={"33%"} img={faqimg}></Card>
      <Card
        title={"Помощь и поддержка"}
        description={
          "Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику. Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. "
        } 
        width={"55%"}
        bgcolor={"#EAF2F5"}
      ></Card>
      <Card
        title={"Методика обучения"}
        description={"Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного."} 
        width={"55%"}
        bgcolor={"#EAF2F5"}
      ></Card>
      <Card bgcolor={"#EAF2F5"} width={"33%"} img={coding}></Card>
    </section>
  );
}
