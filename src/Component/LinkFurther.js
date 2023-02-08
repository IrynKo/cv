
import { gsap } from "gsap/dist/gsap";


import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
//gsap.registerPlugin(SplitText);

const LinkFurther = ({text, link}) => {
    const component = useRef(); // a ref for the root-level element; we use selector text for everything else.
    const arrowSvg = useRef();

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
   
      
    }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
    
    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);


  
  return (
    <>
          <Link className="link-further" to={link}>
          <span>{text}</span>  
          <svg ref={arrowSvg} width="24" height="24" xmlns="http://www.w3.org/2000/svg" 
          fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z">
              </path>
              </svg>
  </Link>
 
</>
  );
};

export default LinkFurther;


/* d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />**/