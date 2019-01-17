import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import { ADDTASK } from './../actions'
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

//shorter version. using implicit return
// const Tasks = ({ tasks, addTask }) => (
//     <div>
//         {tasks.map((task, index) => <Task key={index} {...task} />  )  }
//         <Button outline color="primary" onClick={() => addTask()}>Add Task</Button>
//     </div>
// )

//longer version
//longer verisons allows to use console.log to debug
const Tasks = ({ tasks, addTask }) => {
    //console.log(tasks)
    return (
        <div>
            {tasks.map((task, index) => {
                //console.log(task)
                return <Task key={index} {...task} />
            }
            )
            }
            <Button outline color="primary" onClick={() => addTask()}>Add Task</Button>
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
  };
   

const mapStateToProps = (state) => ({ tasks: state })

//arrow function
//which returns an object literal ,so enclosed in () parenthesis
//The key of object literal itself has an arow function as value
//which dispatches the action
//its an action creator so should have ()
const mapDespatchToProps = (dispatch) => (
    { addTask: () => { dispatch(ADDTASK()) } }
)


const connectedTasks = connect(mapStateToProps, mapDespatchToProps)(Tasks)

export { connectedTasks as Tasks }
