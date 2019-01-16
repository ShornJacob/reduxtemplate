import React from 'react'
import Header from './components/Header'

//return is implicit in arrow function
//App =  <div><Header /></div>
//omitting arrow function will cause error. "Check the render method of `App`."
//Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
const App = () =>    <div><Header /></div>

export default App