import "./benefitsSection.css";
import Button from "@/Components/Additional/Button/button";
import benefImg from "@/app/assets/img/benefImg.png";
import Card from "@/Components/Additional/Card/card";
import count from "@/app/assets/img/count.png";
import modern from "@/app/assets/img/modern.png";
import server from "@/app/assets/img/server.png";
import calendar from "@/app/assets/img/calendar.png";
import sms from "@/app/assets/img/sms.png";
import pay from "@/app/assets/img/pay.png";
import save from "@/app/assets/img/save.png";

export default function Benefits() {
  return (
    <>
      <h2 className="whatTach">Какие технологии вы изучите:</h2>
      <div className="benefits">
        <div>
          <img src={benefImg} alt="" />
        </div>
        <div className="left">
          <Button
            bgcolor={"#5096FF"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Язык программирования Python"}
          ></Button>
          <Button
            bgcolor={"#FFB359"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Сети"}
          ></Button>
          <Button
            bgcolor={"#FF6F50"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Базы данных"}
          ></Button>
          <Button
            bgcolor={"#4BD071"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Фреймворки Flask и Django"}
          ></Button>
          <Button
            bgcolor={"#50C0FF"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Отладка и тестирование"}
          ></Button>
          <Button
            bgcolor={"#4B77B9"}
            color={"white"}
            padding={"2.5vh   "}
            Children={"Docker"}
          ></Button>
          <Button
            bgcolor={"#AF93FF"}
            color={"white"}
            padding={"2.5vh"}
            Children={"Gitr"}
          ></Button>
          <p>Это необходимый минимум для современного backend-разработчика</p>
        </div>
      </div>
      <h2 className="whatTach">Обучение в YtYt – <br /> это удобно и результативно</h2>
      <div className="learndiv">
      <Card width={"17%"} height={"30vh"} img={count} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={modern} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={server} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={calendar} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={sms} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={pay} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      <Card width={"17%"} height={"30vh"} img={save} bgcolor={"#EAF2F5"} title={"Огромное количество практики"} description={"Более 500 самостоятельных заданий и 20 полноценных больших проектов"} display={"flex"} direction={"column"}></Card>
      </div>
    </>
  );
}
