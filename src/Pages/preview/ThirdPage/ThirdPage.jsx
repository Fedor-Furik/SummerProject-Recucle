import React from 'react'
import Logo from "../../assets/Logo.png"
import Img from "../../../assets/Third.png"
import { NavLink } from 'react-router-dom'
import "../Prew.scss"

export default function ThirdPage() {
  return (
    <div className="PrevContainer">
      <header>
        <div className="logo2">
          <div className="Flex">
            <img src={Logo} alt="ImageError" />
            <h3>зеленый ресурс</h3>
          </div> 
        </div>
        <NavLink id="Hide" className="For" to="/SignIn"><h4>Пропустить</h4></NavLink>
      </header>
      <main>
        <img src={Img} alt="ImageError" />
        <div className="title">
          <h1>Вторичный ресурс</h1>
          <h2 className='big2'>способствует уменьшению потребления природных ресурсов</h2>
        </div>
      </main>
      <footer>
        <div className="PodBlock">
        <div className="Inder">
        <div></div>
        <div></div>
        <div  className="active"></div>
      </div>
      </div>
        <button className='Next'><NavLink to="/SignIn" className="Nav">Далее</NavLink></button>
      </footer>
    </div>
  )
}





































// import React, { useEffect } from 'react';
// import logo from "../assets/Logo.png";
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

// export default function ThirdPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     function animat(chos) {
//       if (chos === "Skip") {
//         let block = document.getElementById('block');
//         const firstTimer = setTimeout(() => {
//           block.style.opacity = "100";
//         }, 3000);

//         const secondTimer = setTimeout(() => {
//           navigate("/SignIn");
//         }, 5000);

//         return () => {
//           clearTimeout(firstTimer);
//           clearTimeout(secondTimer);
//         };
//       }
//     }

//     animat("Skip");
//   }, [navigate]);

//   return (
//     <div className="container5">
//     <div id='block' className="animDiv">.</div>
//     <header>
//       <div className="logo">
//         <img src={logo} alt="ImgError" />
//         <div className="UnFlex"><h3>зеленый ресурс</h3></div>
//       </div>
//       <h4 className="SkipLink" onClick={animat("Skip")}>Пропустить</h4>
//     </header>
//     <main>
//       {/* <img src={MainIm} alt="ImgError" /> */}
//     </main>
//     <footer>
//       <div className="title">
//           <h1></h1>
//           <h2></h2>
//       </div>
//       <div className="indicator">
//         <button className='ButFr'></button>
//         <button className='ButSec'></button>
//         <button className='ButThir'></button>
//       </div>
//       <button className='transition'></button>
//     </footer>
//   </div>
//   );
// }










// import React from 'react'
// import logo from "../assets/Logo.png"
// import MainIm from "../assets/ThirdI" ///////
// import { NavLink } from "react-router-dom";

// export default function ThirdPage() { ///////
//   return (
//     <div className="container5">
//       <header>
//         <div className="logo">
//           <img src={logo} alt="ImgError" />
//           <div className="UnFlex"><h3>зеленый ресурс</h3></div>
//         </div>
//         <NavLink to="/SignIn" className="SkipLink">Пропустить</NavLink>
//       </header>
//       <main>
//         <img src={MainIm} alt="ImgError" />
//       </main>
//       <footer>
//         <div className="title">
//             <h1></h1>
//             <h2></h2>
//         </div>
//         <div className="indicator">
//           <button className='ButFr'></button>
//           <button className='ButSec'></button>
//           <button className='ButThir'></button>
//         </div>
//         <button className='transition'></button>
//       </footer>
//     </div>
//   )
// }
