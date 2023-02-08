
import React, { useState } from 'react';
import Modal from './Modal';


const ProjectItem = ({...item}) => {
    console.log(item, "item")
    const [openModal, setOpenModal] = useState(false);
   // console.log('try1',onMouse);
   const onHandelModal= () => {
    setOpenModal(prev => !prev)
}
    return (
        <>
      
        <li  onClick={onHandelModal} className='projects-list__item'>
                    <img src={item.img}/>
                    <div className='project-description'>
                        <h6>{item.name}</h6>
                        <p>{item.description}</p>
                        <ul className='project-description__list'>
                            {item.stack.map(el=>(
                                <li>{el}</li>
                            ))}
                        </ul>
                    </div>
                </li>
    {openModal && <Modal item={item} setOpenModal={setOpenModal}/>}
   
        </>
    );
    
};


export default ProjectItem;


