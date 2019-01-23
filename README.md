/src/actions/index.js

export const ADD_FORM_TASK = (userId, id, title, body) => (
    {
        type: "ADD_FORM_TASK",
        payload: {
            userId: userId,
            id: id,
            title: title,
            body: body
        }
    }
)

now has an action that accpet variables

/src/components/TaskForm

const mapDispatchToProps = (dispatch)  => (
  { addTask: (values) => { dispatch(ADD_FORM_TASK(Number(values.userId),Number(values.id),values.title,values.body)) } }
)

TaskForm = connect(
  null,
  mapDispatchToProps
)(TaskForm)

//uses mapDispatchtoProps
//first argument of connect should be null
//https://stackoverflow.com/questions/35443167/dispatch-is-not-a-function-when-argument-to-maptodispatchtoprops-in-redux


let TaskForm = ({handleSubmit,addTask}) => 
  <form onSubmit={handleSubmit(addTask)}>
Taskform  receives variables, and unpacks them to local variables