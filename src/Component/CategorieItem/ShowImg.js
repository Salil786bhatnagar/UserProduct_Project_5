import React from 'react'
 
const ShowImg=(props)=> {
    const img = `https://source.unsplash.com/300x400/?${props.name}`;
  return (
    <div>
        <img src={img} alt="search"/>
    </div>
  )
}
export default ShowImg
