import React from 'react'
import { Alert } from 'reactstrap';

//wrapping JSX in parentheses to avoid the pitfalls of automatic semicolon insertion.
const Header = () => (
    <div>
       <Alert color="primary">
        Heading Alert
      </Alert>
    </div>
)

export default Header