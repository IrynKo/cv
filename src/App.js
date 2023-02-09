import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import CV from './Pages/CV';
import { Route, Routes } from 'react-router';
import Header from './Component/Header';
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
//let onMouse

const Circle = forwardRef(({ active,size, delay }, ref) => {
  const el = useRef();
    
  useImperativeHandle(ref, () => {           
    
    // return our API
    return {
      moveTo(x, y) {
     //   console.log(x,y)
        gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);
   
  return <div className={`circle ${active} ${size}`} ref={el}></div>;
});
  

function App() {
  const circleRefs = useRef([]);
  const [act, setAct] = useState(true)
  
  // reset on re-renders
  circleRefs.current = [];
const onMouse = () => {
setAct(prev=>!prev)
}
const offMouse = () => {
  setAct(prev=>!prev)
 }

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    
    window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
      //console.log(ref,'ref')
    }    
  };
  //console.log(circleRefs);
    
  /*useLayoutEffect(() => {    
    // doesn't trigger a render!
    circleRef.current.moveTo(300, 100);
  }, []);*/
 // console.log(circleRef);
  return (
    
    <div className="App">
      <div className='circle-wrapper'>
       {act ? 
     <>
      <Circle  size="sm"  ref={addCircleRef} delay={0} /> 
      <Circle size="md"   ref={addCircleRef} delay={0.1} /> 
     </>
       : 
       <>
      <Circle active="act" size="sm"  ref={addCircleRef} delay={0} />  
      <Circle active="act" size="md" ref={addCircleRef} delay={0.1} />
      </>
      }
      </div>
    
      <Header onMouse={onMouse} offMouse={offMouse}/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="cv" element={<CV/>} />
      <Route path="contact" element={<Contact/>} />
      </Routes>
   
    </div>
  );
}

export default App;
