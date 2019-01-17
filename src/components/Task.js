import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';





const Task = ({ userId,id,title,body }) => {

    //console.log(userId)

    return (
        <ListGroup>
        <ListGroupItem>{userId}</ListGroupItem>
        <ListGroupItem>{id}</ListGroupItem>
        <ListGroupItem>{title}</ListGroupItem>
        <ListGroupItem>{body}</ListGroupItem>
    </ListGroup>
    )
}
   

export default Task
