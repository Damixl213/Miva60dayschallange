 
import React, { useRef, useState } from "react";
import Confetti from 'react-confetti';
import './X_O.css'
import heart from '../Assets/heart.png'
import broken_heart from '../Assets/brokenheart.png'

// let data =[" "," "," "," ", " "," "," ", " ", " "]
 
const X_O = () => {
  let[count, setCount]= useState(0);
  let[lock, setLock]=useState(false);
  const [winner, setWinner] = useState(null);
  const[showConfetti, setShowConfetti]=useState(false);
  const [data, setData] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  let titleRef =useRef(null);
  let dareRef =useRef(null);

   const toggle = (e,num)=>{
  if (lock) {
    return 0;
  }
  if (count%2===0) {
   
    e.target.innerHTML = `<img src='${heart}'>`
      data[num]="x";
      setData(data);
      setCount(++count);
  }
  else{
    e.target.innerHTML = `<img src='${broken_heart}'>`
    data[num]="o";
    setData(data);
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
// Check for draw
if (data.every(cell => cell !== " ")) {
  Won(null);
}

}



//Winning Dares
const dares = [
  "You will have to kiss your partner 😘",
  "You have to cook dinner for your partner 🍲",
  "You have to give your partner a massage 💆‍♂️",
  "You have to take your partner out for a date 🌹",
  "You have to write a love letter to your partner 💌",
 "Sing a love song in front of your partner 🎤",
 "Write a poem or love letter and read it aloud 📜",
 "Plan a surprise getaway or weekend staycation 🏖️",
  "Exchange silly love notes or drawings",
  "Post you partner picture  on your social media",
  "Use your non-dominant hand for an hour",
  "Send a picture of your eyes to your crush",
  "Paint your fingernails with a crayon",
  "Block the fifth person in your DMs, no cheating by scrolling",
  " Send a video of you singing a love song to your crush",
  "Text the third person in your message history 'last night was great' with a heart emoji",
  "Tell the your crush  something about you that you've never told them before",
  "Show everyone your frequently used emoji list.",
  "Dare 🤪 suprise!!,  your partner will ask you  any question"
];

const getRandomDare = () => {
  const randomIndex = Math.floor(Math.random() * dares.length);
  return dares[randomIndex];
}

//losing Dares

const Ldares = [
  "You have to buy a gift for your partner",
 "Dare 🤪 suprise!!,  your partner will ask you  any question oor gives you a Dare ",
"Give your partner your credit card for a day",
"Call your first DM for no reason",
"Let your partner choose your profile picture for the next day",
"Play the last song you listened to. No lying!",
"Tell the other players something they don't know about you",
"Send a meme you've made",
"Have you ever peed in a public pool? Tell the truth!",
"Call your parents and talk about the weather in a british accent",
"Lick someone's hand.",
"Tell your partner , your most embarrassing story",
"Describe the object closest to you until your partner guesses the object.",
"Put on makeup if you don't wear makeup and it's available, take off all your makeup if you're wearing it",
"Set your cell phone language to Spanish for the next 10 minutes"


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
  setShowConfetti(true);

  if(winner ==="x"){
    setShowConfetti(true);
    titleRef.current.innerHTML=`<img src=${heart}> is the winner`;
    dareRef.current.innerHTML = `${oneDare}`;
  }else if(winner ==="o"){
    setShowConfetti(true);
    titleRef.current.innerHTML=`<img src=${broken_heart}>  is the winner`;
    dareRef.current.innerHTML = `${TwoDare}`;
}else{ 
  setShowConfetti(false);
  titleRef.current.innerHTML = "It's a draw";
  dareRef.current.innerHTML = "You both are winners, play again to find the ultimate winner";

};
  

 // Hide confetti after 5 seconds
 setTimeout(() => {
  setShowConfetti(false);
}, 7000);

}
const reset = () => {
  setLock(false);
    setWinner(null);
    setShowConfetti(false);
    setCount(0);
    setData([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    titleRef.current.innerHTML = "X and O love gaming <span>React</span>";
    dareRef.current.innerHTML = "Happy valentine, lets make this game fun... make sure you play with your partner or your crush that is near you 😏.";
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => box.innerHTML = "");
}
  return (
    <div className='container'>
     {showConfetti && <Confetti />}
      <h1 className="title" ref={titleRef}>X and O love gaming <span>React</span></h1>
      <p ref={dareRef}>Happy valentine, lets make this game fun... make sure you play with your partner or your crush that is near you 😏, Watch out  loser get Dared</p>
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
      <button className="reset" onClick={reset}>Restart</button>

    </div>
  )
}
export default X_O

