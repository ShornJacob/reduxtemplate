import taskReducer from './taskReducer'
import { ADDTASK } from '../actions'
import { ADD_FORM_TASK } from '../actions'

describe('post reducer tests', () => {

    test('return initial state', () => {
        expect(taskReducer(undefined, {})).toEqual([
            {
                userId: 345,
                id: 678,
                title: "Rex Der",
                body: "Cedf FGG"
            }
        ]
        )
    })

    test('action ADDTask adds an another task', () => {

        const newState = [
            {
                userId: 345,
                id: 678,
                title: "Rex Der",
                body: "Cedf FGG"
            },
            {
                userId: 345,
                id: 678,
                title: "Rex Der",
                body: "Cedf FGG"
            }
        ]

        expect(taskReducer(undefined, ADDTASK())).toEqual(newState)
    })

    test('action ADD_FORM_TASK adds the task', () => {

        const newState = [
            {
                userId: 123,
                id: 456,
                title: "WOher COmest du",
                body: "We comest azherbaijan"
            },
            {
                userId: 345,
                id: 678,
                title: "Rex Der",
                body: "Cedf FGG"
            }        
        ]

        expect(taskReducer(undefined, ADD_FORM_TASK (123,456,"WOher COmest du","We comest azherbaijan"))).toEqual(newState)
    })
})