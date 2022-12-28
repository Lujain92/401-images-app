import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'

function Child(props){
    let [numsOfLike,setnumsOfLike]=useState(0)

    const incrementOfLikes=()=>{
        setnumsOfLike(numsOfLike+1)
        props.total()

    }



    return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         number of likes: {numsOfLike}
        </Card.Text>
        <Button variant="primary" onClick={incrementOfLikes}>Like</Button>
      </Card.Body>
    </Card>

       
        </>

    )
}
export default Child