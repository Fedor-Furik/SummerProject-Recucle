import { useNavigate } from 'react-router-dom';

import Logo from "../assets/Logo.png"
import "./Home.scss"

export default function Home() {
  const navigate = useNavigate();

  window.onload = function() {
    const secondTimer = setTimeout(() => {
      navigate("/FirstPage");
    }, 5000);

    return () => {
      clearTimeout(secondTimer);
    };
}

  return (
    <div className="container1">
       <div className="logo"><img src={Logo} alt="ImageError" /><h3>зеленый ресурс</h3></div>
    </div>
  );
}