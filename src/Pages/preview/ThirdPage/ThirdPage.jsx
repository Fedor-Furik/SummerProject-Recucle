import React from 'react'
import logo from "../../assets/Logo.png"
// import MainIm from "../assets/ThirdI"

export default function ThirdPage() {
  return (
    <div className="PrevContainer3">
      <header>
        <div className="logo">
          <img src={logo} alt="ImgError" />
          <div className="UnFlex"><h3>зеленый ресурс</h3></div>
        </div>
        <h4 className="SkipLink">Пропустить</h4>
      </header>
      <main>
        {/* <img src={MainIm} alt="ImgError" /> */}
      </main>
      <footer>
        <div className="title">
            <h1></h1>
            <h2></h2>
        </div>
        <div className="indicator">
          <button className='ButFr'></button>
          <button className='ButSec'></button>
          <button className='ButThir'></button>
        </div>
        <button className='transition'></button>
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
