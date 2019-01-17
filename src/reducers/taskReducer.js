

const initialState = [
    {
        userId : 345,
        id : 678,
        title : "Rex Der",
        body : "Cedf FGG"
    }
]

//Redux will call our reducer with an undefined state for the first time. 
//use the ES6 default arguments syntax to return the initial state of our app
const taskReducer = (state = initialState,action) => {
    switch(action.type) {
       

        default:
            return state
    }
}

export default taskReducer