import "./footer.css";
import logo from "@/app/assets/img/logo.png";
import social from "@/app/assets/img/social.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="logofoot">
          <div style={{ display: "flex" }}>
            <img src={logo} alt="" />
            <p>Школа программирования</p>
          </div>
          <img src={social} alt="" />
        </div>
        <div style={{lineHeight:"2"}}>
          <p>
            Чему вы научитесь <br />
            Процесс обучения <br />
            Стоимость <br />
            Контакты <br />
            Регистрация
          </p>
        </div>
        <div style={{lineHeight:"2"}}>
          <div>
            <p>+7 (499) 348 93 96</p>
            <p>info@ytyt.ru</p>
          </div>
          <p>
            ИП Умаров Т. А. <br />
            ИНН 745216229809 <br />
            ОГРНИП 315745200001358
          </p>
        </div>
      </div>
      <div style={{width:"80%",  color:"grey", display:"flex", justifyContent:"space-between"}}>
        <p>© 2022 ytyt — Все права защищены</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
