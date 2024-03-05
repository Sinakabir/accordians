import React, { useState } from 'react'
import './Accordian.css'
import { data } from '../Assets/data'
const Accordian = () => {

  
  const [selectd,setSelected] = useState(null);
  const [enableMulte,setEnableMulti] = useState(false);
  const [multiple,setMultiple] = useState([]);

function handleSingleSeelection(getCurrentId){
setSelected(getCurrentId === selectd ? null : getCurrentId)
}

function handleMultiSelection(getCurrentId){
let copyMulti = [...multiple];
const findIndexofCurrentId = copyMulti.indexOf(getCurrentId);
if(findIndexofCurrentId === -1) copyMulti.push(getCurrentId)
else copyMulti.splice(findIndexofCurrentId, 1)
setMultiple(copyMulti)

}

  return (
    <div className='container'>
      <button onClick={()=>setEnableMulti(!enableMulte)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ?(
        data.map((dataItem)=> 
        (<div className='item'>
          <div onClick={enableMulte ? ()=>handleMultiSelection(dataItem.id):()=>
            {handleSingleSeelection(dataItem.id)}} className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
         {
          enableMulte ? multiple.indexOf(dataItem.id) !== -1 &&
          <div className='content'>{dataItem.answer}</div>:
          selectd === dataItem.id && <div className='content'>{dataItem.answer}</div>
         }

          { /*selectd=== dataItem.id ? 
          <div className='content'>{dataItem.answer}</div> : null */}
        </div>)))
        : (<div>No data found !</div>
        )}
      </div>
      </div>
  )
}

export default Accordian