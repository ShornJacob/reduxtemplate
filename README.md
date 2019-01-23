src/components/TaskForm.js
A redux Form

src/store.js
const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    tasks: taskReducer
  })

store object will now has two keys, form and tasks

src/components/Tasks.js
const mapStateToProps = (state) => ({ tasks: state.tasks })
the tasks object in state is mapped to the component


src/components/TaskForm.js
A redux-form