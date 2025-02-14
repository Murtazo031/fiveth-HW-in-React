import { Children } from "react";
import "./header.css";
import logo from "@/app/assets/img/logo.png";
import Button from "@/Components/Additional/Button/button";
import HeroSection from "../HeroSection/heroSection";

export default function Header(){
    return <header>
        <navbar>
          <img src={logo} alt="" />
        <ul>
            <li><a>Чему вы научитесь</a></li>
            <li><a>Процесс обучения</a></li>
            <li><a>Стоимость</a></li>
            <li><a>Контакты</a></li>
        </ul>  
        <div className="reg">
            <p>Регистрация</p>
            <Button bgcolor={"#38BFF2"} color={"white"} Children="войти" padding="0.5vh 5vh"></Button>
        </div>
        </navbar>
        <HeroSection></HeroSection>
        
    </header>
}