import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='background'>
        <div className= 'container'>
        <img src='/img/image-qr-code.png' width={288} height={288} alt="Imagem qr-code" />
            <div className='text'>
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>

    </div>

  )
}

export default Main