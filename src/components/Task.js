import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';




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

Task.propTypes = {
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

export default Task
