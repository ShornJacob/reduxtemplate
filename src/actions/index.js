export const ADDTASK = () => ({ type: "ADDTASK" })

export const ADD_FORM_TASK = (userId, id, title, body) => (
    {
        type: "ADD_FORM_TASK",
        payload: {
            userId: userId,
            id: id,
            title: title,
            body: body
        }
    }
)