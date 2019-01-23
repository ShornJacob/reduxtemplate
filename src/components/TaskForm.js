import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button, Input } from 'reactstrap';


const renderInput = ({input,meta,label,placeholder,type}) => 
<div>
  <Label>{label}</Label>
  <Input {...input} type={type} placeholder={placeholder} />
</div>

let TaskForm = ({handleSubmit}) => 
  <form>
    <div>
      <Field name="userId" label="User ID" component={renderInput} type="number" placeholder="User ID"  />
      <Field name="id" label="ID" component={renderInput}  type="number" placeholder="ID" />
      <Field name="title" label="title" component={renderInput} type="text" placeholder="Title" />
      <Field name="body" label="body" component={renderInput} type="text" placeholder="First Name" />

      <Button  type="submit" >Submit</Button>
    </div>
  </form>


TaskForm = reduxForm ({
  form : 'task'
})(TaskForm)

export default TaskForm
