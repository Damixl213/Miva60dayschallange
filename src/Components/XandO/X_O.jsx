import React from 'react'
import './X_O.css'
import heart from '../Assets/heart.png'
import broken_heart from '../Assets/brokenheart.png'
export const X_O = () => {
  return (
    <div className='container'>
      <h1 className="title">X and O love gaming <span>React</span></h1>

      <div className="board">

      </div>
      <button className="reset">Restart</button>
    </div>
  )
}
export default X_O
