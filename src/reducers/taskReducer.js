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
       case 'ADDTASK' :
        return [
            {
                userId : 345,
                id : 678,
                title : "Rex Der",
                body : "Cedf FGG"
            },
            ...state
        ]

        case 'ADD_FORM_TASK' :
        return [
            {
                userId : action.payload.userId,
                id : action.payload.id,
                title : action.payload.title,
                body : action.payload.body
            },
            ...state
        ]

        default:
            return state
    }
}

export default taskReducer