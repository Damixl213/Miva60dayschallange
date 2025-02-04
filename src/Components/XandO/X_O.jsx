import React, { useRef, useState } from "react";
import Confetti from 'react-confetti';
import './X_O.css'
import heart from '../Assets/heart.png'
import broken_heart from '../Assets/brokenheart.png'

let data =[" "," "," "," ", " "," "," ", " ", " "]
 
const X_O = () => {
  let[count, setCount]= useState(0);
  let[lock, setLock]=useState(false);
  let titleRef =useRef(null);
  let dareRef =useRef(null);
  
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

  // Check for winning
  const checkwin= ()=>{
    if (data [0]===data[1] && data[1]===data[2] && data[2]!==" ") {
      Won(data [2]);
  }
  else if (data [3]===data[4] && data[4]===data[5] && data[5]!==" ")
  {
    Won(data[4]);
  }
  else if (data [6]===data[7] && data[7]===data[8] && data[8]!==" ")
  {
    Won(data[8]);
  }
  else if (data [0]===data[3] && data[3]===data[6] && data[6]!==" ")
  {
    Won(data[6]);
  }
  else if (data [1]===data[4] && data[4]===data[7] && data[7]!==" ")
  {
    Won(data[7]);
  }
  else if (data [2]===data[5] && data[5]===data[8] && data[8]!==" ")
  {
    Won(data[8]);
  }

  else if (data [0]===data[4] && data[4]===data[8] && data[8]!==" ")
  {
    Won(data[8]);
  }

  else if (data [0]===data[1] && data[1]===data[2] && data[2]!==" ")
  {
    Won(data[2]);
  }
  else if (data [2]===data[4] && data[4]===data[6] && data[6]!==" ")
  {
    Won(data[6]);
  }
 else if (data[3] === data[4] && data[4] === data[5] && data[5] !== " ") {
  Won(data[5]);
} else if (data[6] === data[7] && data[7] === data[8] && data[8] !== " ") {
  Won(data[8]);
}
// Check vertical wins
else if (data[0] === data[3] && data[3] === data[6] && data[6] !== " ") {
  Won(data[6]);
} else if (data[1] === data[4] && data[4] === data[7] && data[7] !== " ") {
  Won(data[7]);
} else if (data[2] === data[5] && data[5] === data[8] && data[8] !== " ") {
  Won(data[8]);
}
// Check diagonal wins
else if (data[0] === data[4] && data[4] === data[8] && data[8] !== " ") {
  Won(data[8]);
} else if (data[2] === data[4] && data[4] === data[6] && data[6] !== " ") {
  Won(data[6]);
}
}



//Winning Dares
const dares = [
  "You will have to kiss your partner 😘",
  // "You have to cook dinner for your partner",
  // "You have to give your partner a massage",
  // "You have to take your partner out for a date",
  // "You have to write a love letter to your partner"
];

const getRandomDare = () => {
  const randomIndex = Math.floor(Math.random() * dares.length);
  return dares[randomIndex];
}

//losing Dares

const Ldares = [
  "You have to buy a gift for your partner",
  // "You have to cook dinner for your partner",
  // "You have to give your partner a massage",
  // "You have to take your partner out for a date",
  // "You have to write a love letter to your partner"
];

const getRandomDarel = () => {
  const randomIndex = Math.floor(Math.random() * Ldares.length);
  return Ldares[randomIndex];
}
// Winning Function
const Won = (winner)  => {
  setLock(true);
  const oneDare = getRandomDare();
  const TwoDare = getRandomDarel();

  if(winner ==="x"){
    titleRef.current.innerHTML=`Heart <img src=${heart}> is the winner`;
    dareRef.current.innerHTML = ` Ou it your lucky day ${oneDare}`;
  }else{
    titleRef.current.innerHTML=`Heart break!<img src=${broken_heart}>  is the winner`;
    dareRef.current.innerHTML = `Ou damand for heart break it high ${TwoDare}`;
}
}
const reset = () => {
  setLock(false);
  let data =[" "," "," "," ", " "," "," ", " ", " "];
  titleRef.current.innerHTML="X and O love gaming <span>React</span>";
}
  return (
    <div className='container'>
       {winner && <Confetti />}
      <h1 className="title" ref={titleRef}>X and O love gaming <span>React</span></h1>
      <p ref={dareRef}>Happy valentine let make this game fun... make sure you play with your partner or your crush😏</p>
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
      <button className="reset" onClick={()=>{reset()}}>Restart</button>
    </div>
  )
}
export default X_O
