import Logo from "../assets/Logo.png";
import "./SignIn.scss";
import { NavLink } from "react-router-dom";
import {Signin} from "../../Components/auth/Signin"


export default function SignIn() {
  return (
    <div className="SignContainer2">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Мы рады видеть вас снова!</h1>
          <h2>Сортируй вместе с нами для чистого завтра!</h2>
        </div>
      </header>
      <main>
        <Signin/>
        <NavLink to="/SignOut">SignOut</NavLink>
      </main>
    </div>
  );
}