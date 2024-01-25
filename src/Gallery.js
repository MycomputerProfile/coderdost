import React, { useState } from 'react'
import { sculptureList } from "./data"

const Gallery = ({color}) => {
    const [index , setIndex] = useState(0)
    const [show , setShow] = useState(false)
    let sculpture = sculptureList[index]
    function handleClick(){
        setIndex(index+1)
    }
    return (
        <>
            <section style={{backgroundColor:'blue' , width:"40vw",backgroundColor:color}}>
                <button onClick={handleClick}>Next</button>
                <h2>{sculpture.name}</h2>
                <h4>({index+1} of {sculptureList.length})</h4>
                <button onClick={()=>{setShow(!show)}}>{show ? "Show" : "Hide"}  Details</button> <br />
                {show && sculpture.description}
                <img src={sculpture.url} alt="" height={200} width={200}/>
            </section>
        </>
    )
}

export default Gallery
