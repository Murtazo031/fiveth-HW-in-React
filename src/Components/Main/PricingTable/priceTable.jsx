import Card from "@/Components/Additional/Card/card";
import "./priceTable.css";
import calc from "@/app/assets/img/calc.png";
import pay from "@/app/assets/img/pay.png";
import save from "@/app/assets/img/save.png";
import voice from "@/app/assets/img/voice.png";
import Table from "@/Components/Additional/Table/table";
import Button from "@/Components/Additional/Button/button";


export default function Price() {
  return (
    <section className="price">
      <h2>Стоимость обучения</h2>
      <div className="icons">
        <Card
          display={"flex"}
          direction={"row"}
          width={"28%"}
          img={calc}
          description={
            "Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
          }
        ></Card>
        <Card
          display={"flex"}
          direction={"row"}
          width={"28%"}
          img={pay}
          description={
            "Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
          }
        ></Card>
        <Card
          display={"flex"}
          direction={"row"}
          width={"28%"}
          img={save}
          description={
            "Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
          }
        ></Card>
      </div>
      <Table></Table>
      <p style={{ color: "grey" }}>
        * если занятиям уделяется около 20 часов в неделю
      </p>
      <div className="voice">
        <Card
          img={voice}
          description={
            "Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой."
          }
          display={"flex"}
        ></Card>
        <Button Children={"Начать обучение"} bgcolor={"#F15525"} color={"white"} padding={"2.5vh 6vh"} width={"45%"} fsize={"18px"}></Button>
      </div>
    </section>
  );
}
