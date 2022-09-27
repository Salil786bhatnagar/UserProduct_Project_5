import React,{useState,useEffect} from 'react'
import Navbar from './Nav/Navbar'
import { Link } from 'react-router-dom';
import Electronics from './CategorieItem/Electronics';
import Jewelery from './CategorieItem/Jewelery';
import Mens_clothing from './CategorieItem/Mens_clothing';
import Womens_clothing from './CategorieItem/Womens_clothing';
import Currentpage from './CategorieItem/Currentpage';
export default function Categories() {

    const [getCategori, setCategori] = useState([]);
    const [num, setNum] = useState();

     useEffect(()=>{
        const categoriHandle= async()=>{
            const data = await fetch(`https://fakestoreapi.com/products/categories`);
            console.log(data);
            const showData = await data.json();
            setCategori(showData)
         }
         categoriHandle();
    
     },[])
   
     
   
  return (
    <div>
        <Navbar/>
        <h3> All Categories</h3>

         {
             getCategori.map((item, id)=>{
                return(
                    <div className='cateItem'>
                      <ul>
                          <li key="id">
                             <Link to="/Jewelery">
                               {item}
                             </Link>
                           </li>
                      </ul>
                    </div>
                ) 
             })
         }
         <div>
           <Currentpage/>
         </div>
    </div>
  )
}
