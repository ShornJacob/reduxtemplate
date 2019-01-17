//Displaying store variable in a component


1. Store is created from reducer

//store.js
const store = createStore(taskReducer)

/reducer/taskReducer
//taskReducer is called with in initialState
//no action in this example

const taskReducer = (state = initialState,action) => {
  switch(action.type) {
  
}

2: Props will be provided to the component from the store in mapStatetoProps

/components/Tasks
const Task = ({ task }) => (
)


const mapStateToProps = (state) => ({task: state[0]})


https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

// You can chain any of the above with `isRequired` to make sure a warning
// is shown if the prop isn't provided.