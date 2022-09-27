import React,{useState} from 'react'
import ShowImg from './ShowImg'
import Nav from '../Nav/Navbar'
 const Search=()=> {
     const [img, setImg] = useState("")
     const inputEvent=(event)=>{
       const data = event.target.value;
       console.log(data);
       setImg(data);
     }
  return (
    <div>
      <Nav/>
        <input type='text' className='inputClass'
               placeholder='search any items'
               onChange={inputEvent}
               value={img}    
               /><br/>
             <span className='showImage'>
               {img === "" ? null : <ShowImg name={img}/> } 
             </span>     
    </div>
   
  )
}
export default Search