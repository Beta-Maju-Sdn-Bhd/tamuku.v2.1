const initState = {
    rooms: null,
    room: null,
}


export const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ROOMS':
            return {
                ...state,
                rooms: action.payload
            }
        case 'GET_ROOM':
            return {
                ...state,
                room: action.payload
            }
        case 'SEND_MSG':
            return {
                ...state,
                room: {
                    ...state.room,
                    messages: [...state.room.messages, action.payload]
                }
            }
        default:
            return state
    }
}