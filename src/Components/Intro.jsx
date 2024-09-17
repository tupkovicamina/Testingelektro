import React from 'react'
import introimg from './../assets/Images/zice.jpg'
import '../CSS/Intro.css'

function Intro() {
  return (
    <div className='intro-container'>
        <img src={introimg} className='introimg'/>
        <div className='box'>
            <h2>Testingelektro d.o.o.</h2>
            <p>Djelatnost preduzeća je: montaža, ispitivanje i puštanje u pogon opreme i
               elektroenergetskih postrojenja, industrijskih objekata, te svih vrsta elektro
               instalacija na građevinskim objektima po utvrđenim procedurama usklađenim sa
               domaćom i međunarodnom praksom i važećim standardima.</p>
            <button className='intro-btn'>Saznaj Više</button>
            <button className='intro-btn'>Kontakt</button>

        </div>
    </div>
  )
}

export default Intro