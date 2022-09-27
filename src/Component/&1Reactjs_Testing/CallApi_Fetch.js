import React,{useState, useEffect} from 'react'
import axios from 'axios';

export default function CallApi_Fetch_Axios() {

    const [getValue, setValue] = useState([]);

    useEffect(()=>{
      const getData=()=>{
    //   fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
    //      result.json().then((response)=>{
    //         setValue(response);
    //      })
    //   })

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(response=>{
        setValue(response)
    })

      }
      getData()
    },[])

    const getAPI = ()=>{
        return(
            getValue.map((item)=>{
                return(
                    <>
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                      </tr>
                    </>
                )
            })
        )
    }

  return (
    <div>
        CallApi Fetch Axios...
        <hr/>
        <br/>

        <table border='1'>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
             {getAPI()}
        </table>

     </div>
  )
}
