import taskReducer from './taskReducer'
import { ADDTASK } from '../actions'

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
})