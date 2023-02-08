//import {gsap} from 'gsap';
//import SplitText from 'gsap-trial/dist/SplitText';
//import { gsap } from "gsap/dist/gsap";
//import {SplitText} from "gsap/SplitText";
//import { gsap } from "gsap/dist/gsap";
import { gsap } from "gsap/dist/gsap";
//import { SplitText } from "gsap-trial/SplitText";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import LinkFurther from "../Component/LinkFurther";
//gsap.registerPlugin(SplitText);

const Home = () => {
    const component = useRef(); // a ref for the root-level element; we use selector text for everything else.
    const arrowSvg = useRef();
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Your source of leading edge water and air treatment technology since 1994."
      )
 // const [index, setIndex] = useState(0)
  useEffect(() => {
   
   /* if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    } */
    wordflick();
  }, [])
  let words = ['Hello!', 'My name is Iryna!', 'I am a Frontend developer!'],
    part,
    i = 0,
    offset = 0,
   
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 200;
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >=  words.length) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    setText(part)
  },speed);
};


 // console.log(index)
  useLayoutEffect(() => {
   // console.log('window.innerWidth',window.innerWidth)
    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
    let ctx = gsap.context(() => {

     // let split = SplitText.create("h1", {type:"chars"});
     //let split = new SplitText("h1", {type:"chars"})
     gsap.fromTo(arrowSvg.current, {x:0}, {x: 10, duration:1, repeat: -1, })
      gsap.from(component.current, { // <- selector text, scoped to this component!
        opacity: 0,
        y: -100,
        x: -100,
        ease: "power2.out",
        //ease: "back",
        duration: 1,
        stagger: 0.1
      });
      
     // return () => component.current.revert(); // context cleanup
      
    }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
    
    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);


  
  return (
    <>
    <div className="container home">
    <h2 className="home-title">{text}</h2>
      <div className="home-description">
        <div className="home-description__text">
          <p className="mb-2">Frontend developer with not so big work experience but with big passion to what I do. 
          Working with my hands to make magic happen on the internet.</p> 
          <p>View my 
          <button type="button"><Link to='projects'> Projects</Link></button>, <button type="button"><Link to='cv'> Resumé</Link></button>, 
          <button type="button"> <Link to=""> Contact Me</Link></button>, or send me an email at <button type="button">ikosynienko@gmail.com</button>.</p>
        </div>
          <LinkFurther text="See my resume" link="cv"/>
  <Footer/>   
      </div>
      
     {/* <svg id="home-svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path
        id="MyPath"
        fill="none"
//stroke="red"
        d="M5,10 L5,27 A40,40 10 10,10 3,30 L7,30 A40,40 0 0,0 10,27 L40,0 Z" />
          <text>
           <textPath data-text="Hello! My name is Iryna." xlinkHref="#MyPath">My name is Iryna. I'm frontend developer! </textPath>
          </text>
        </svg>
       
     {  window.innerWidth < 768 &&
        <svg id="home-svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path
        id="MyPath"
        fill="none"
//stroke="red"
d="M10,10 Q10,120 60,80 Q90,60 160,120 Q180,80 80,60" />
<text>
<textPath data-text="Hello! My name is Iryna. I'm frontend developer!" xlinkHref="#MyPath">Hello! My name is Iryna. I'm frontend developer!</textPath>
</text>
        </svg>
}
      { window.innerWidth < 1280 &&
        <svg id="home-svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path
        id="MyPath"
        fill="none"
//stroke="red"
        d="M10,10 Q10,100 80,50 Q100,40 120,60 Q130,90 80,100" />
          <text>
           <textPath data-text="Hello! My name is Iryna. I'm frontend developer!" xlinkHref="#MyPath">Hello! My name is Iryna. I'm frontend developer!</textPath>
          </text>
        </svg>
}
{ window.innerWidth > 1280 &&   <svg id="home-svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
<path
id="MyPath"
          fill="none"
//stroke="red"
          d="M10,10 Q10,100 60,40 Q80,30 100,60 Q100,80 160,60 " />
            <text>
              <textPath data-text="Hello! My name is Iryna. I'm frontend developer!" xlinkHref="#MyPath">Hello! My name is Iryna. I'm frontend developer!</textPath>
            </text>
        </svg>}*/ } 

           
    </div>
</>
  );
};

export default Home;


/* d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />**/