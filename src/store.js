import { createStore, combineReducers } from 'redux'
import taskReducer from './reducers/taskReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    tasks: taskReducer
  })
  

const store = createStore(rootReducer)

export default store