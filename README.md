Notes

//Index renders <App /> on root Element
ReactDOM.render(<App />, document.getElementById('root'));


App is a JSX element
const App = () =>    <div><Header /></div>

/components/Header is a also pure JSX
<div>
       <Alert color="primary">
        Heading Alert
      </Alert>
</div>