import React from 'react';
import cv from '../images/cv.pdf';
import Footer from '../Component/Footer';
import LinkFurther from '../Component/LinkFurther';

const CV = () => {
    return (
        <div className='container resume'>
            <h2 className='page-title'>Resumé.</h2>
            <p className='resume-text'>Reach out to me via my  
            <a href="/contact"> contact page, </a>
            <a href="https://drive.google.com/file/d/10Il9u80a14ST-eXy7dWmRx0JKz4ZorzU/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Go to Resumé Page">
             view</a> or 
            <a href="https://drive.google.com/file/d/10Il9u80a14ST-eXy7dWmRx0JKz4ZorzU/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer" download="cv" aria-label="Go to Resumé Page"> download </a>
             the resume </p>
           
            <iframe src="https://www.canva.com/design/DAFZzNUKAI8/s52xYBF1tVyXti1BO_EQYA/view?embed#view=fitH" allowFullscreen width="705px" height="1000px" title="Iryna Kosynienko Resumé"  scrolling="no" toolbar="0"/>
          <LinkFurther text="Contact me now!" link=""/>
            <Footer/>
            </div>
        
        
    );
};

export default CV;

/*${cv}#toolbar=0 ${cv}#view=fitH
{`${cv}#view=fitH`}
*/