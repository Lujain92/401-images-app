import Child from "./child"
import Data from "./data.json"
import { useState } from "react"
import Row from 'react-bootstrap/Row';


function Parent(){
    let [totalLikes,settotalLikes]= useState(0)

    const total =()=>{
        settotalLikes(totalLikes+1)

    }
    return(
        <>
        <h1>Hello to Nature</h1>
        <h2> total number of likes : {totalLikes}</h2>
        <Row xs={1} md={2} className="g-4">

        {Data.map(child=> 
            {
            return(
                    <Child imgPath={child.image_url} title={child.title} like={child.like} total={total}/>
                )
            
            }

        )
   

        }
        </Row>

       

        </>
    )
}

export default Parent