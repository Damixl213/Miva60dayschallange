import React, { useState } from "react";
import './X_O.css'
import heart from '../Assets/heart.png'
import broken_heart from '../Assets/brokenheart.png'

let data =[" "," "," "," ", " "," "," ", " ", " "]
 
const X_O = () => {
  let[count, setCount]= useState(0);
  let[lock, setLock]=useState(false);
   const toggle = (e,num)=>{
  if (lock) {
    return 0;
  }
  if (count%2===0) {
   
    e.target.innerHTML = `<img src='${heart}'>`
      data[num]="x";
      setCount(++count);
  }
  else{
    e.target.innerHTML = `<img src='${broken_heart}'>`
    data[num]="o";
    setCount(++count);
  }
  checkwin();
  }
  const checkwin= ()=>{
    if (data [0]===data[1] && data[1]===data[2] && data[2]!==" ") {
      Won(data);
  }
  else if (data [3]===data[4] && data[4]===data[5] && data[5]!==" ")
  {
    Won(data);
  }
  else if (data [6]===data[7] && data[7]===data[8] && data[8]!==" ")
  {
    Won(data);
  }
  else if (data [0]===data[3] && data[3]===data[6] && data[6]!==" ")
  {
    Won(data);
  }
  else if (data [1]===data[4] && data[4]===data[7] && data[7]!==" ")
  {
    Won(data);
  }
  else if (data [2]===data[5] && data[8]===data[8] && data[7]!==" ")
  {
    Won(data);
  }

  else if (data [0]===data[4] && data[4]===data[8] && data[8]!==" ")
  {
    Won(data);
  }

  else if (data [0]===data[1] && data[1]===data[2] && data[2]!==" ")
  {
    Won(data);
  }
  else if (data [2]===data[4] && data[4]===data[6] && data[6]!==" ")
  {
    Won(data);
  }
}
const Won = (Winner)  => {
  setLock(true);
}
  return (
    <div className='container'>
      <h1 className="title">X and O love gaming <span>React</span></h1>

      <div className="board">
      <div className="row1">
        <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,1)}} ></div>
        <div className="boxes" onClick={(e)=>{toggle(e,2)}} ></div>
      </div>
      <div className="row2">
        <div className="boxes" onClick={(e)=>{toggle(e,3)}} ></div>
        <div className="boxes" onClick={(e)=>{toggle(e,4)}} ></div>
        <div className="boxes" onClick={(e)=>{toggle(e,5)}} ></div>
      </div>

      <div className="row3">
        <div className="boxes" onClick={(e)=>{toggle(e,6)}} ></div>
        <div className="boxes" onClick={(e)=>{toggle(e,7)}} ></div>
        <div className="boxes" onClick={(e)=>{toggle(e,8)}} ></div>
      </div>
      </div>
      <button className="reset">Restart</button>
    </div>
  )
}
export default X_O
