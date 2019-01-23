import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { ADD_FORM_TASK } from './../actions'


const renderInput = ({input,meta,label,placeholder,type}) => 
<div>
  <Label>{label}</Label>
  <Input {...input} type={type} placeholder={placeholder} />
</div>

let TaskForm = ({handleSubmit,addTask}) => 
  <form onSubmit={handleSubmit(addTask)}>
    <div>
      <Field name="userId" label="User ID" component={renderInput} type="number" placeholder="User ID"  />
      <Field name="id" label="ID" component={renderInput}  type="number" placeholder="ID" />
      <Field name="title" label="title" component={renderInput} type="text" placeholder="Title" />
      <Field name="body" label="body" component={renderInput} type="text" placeholder="First Name" />

      <Button  type="submit" >Submit</Button>
    </div>
  </form>

const mapDispatchToProps = (dispatch)  => (
  { addTask: (values) => { dispatch(ADD_FORM_TASK(Number(values.userId),Number(values.id),values.title,values.body)) } }
)

TaskForm = connect(
  null,
  mapDispatchToProps
)(TaskForm)

TaskForm = reduxForm ({
  form : 'task'
})(TaskForm)

export default TaskForm
