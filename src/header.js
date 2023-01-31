import React from 'react'
import trollface from './trollface.png'
import './index.css'
export default function header() {
    return (
        <div className="header">
            <div className='firstline'>
                <img src={trollface} className="trollface"></img>
                <h3 className="header--title">Meme Generator</h3>
                <div className='projectname'>React Course Project 3</div>
            </div>

        </div>
    )
}