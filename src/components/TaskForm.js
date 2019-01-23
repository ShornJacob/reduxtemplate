import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button, Input, Alert} from 'reactstrap';

let TaskForm = ({handleSubmit}) => 
  <form>
    <div>
      <Field name="userId" label="User ID" component="input" type={"number"} placeholder="User Id" />
      <Field name="id" label="ID" component="input" type={"number"} placeholder="ID" />
      <Field name="title" label="title" component="title" type={"number"} placeholder="Title" />
      <Field name="body" label="body" component="body" type={"number"} placeholder="First Name" />

      <Button  type="submit" >Submit</Button>
    </div>
  </form>


TaskForm = reduxForm ({
  form : 'task'
})(TaskForm)

export default TaskForm
