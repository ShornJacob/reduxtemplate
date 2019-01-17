import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux'

const Task = ({ task }) => (
    <ListGroup>
        <ListGroupItem>{task.userId}</ListGroupItem>
        <ListGroupItem>{task.id}</ListGroupItem>
        <ListGroupItem>{task.title}</ListGroupItem>
        <ListGroupItem>{task.body}</ListGroupItem>
    </ListGroup>
)

const mapStateToProps = (state) => ({task: state[0]})

const connectedTask = connect(mapStateToProps)(Task)

export { connectedTask as Task}
