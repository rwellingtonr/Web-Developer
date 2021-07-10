import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return (
   <div className='center ma'>
     <div className='absolute mt2'>
       <img src={imageUrl} id='inputimage' alt='' width='500px' height='auto' />
       <div className='bounding-box' 
       style={{
         left: box.leftCol,
         top: box.topRow,
         bottom:box.bottomRow,
         right: box.rightCol
         }}>
         </div>
     </div>
   </div>
  );
}

export default FaceRecognition;