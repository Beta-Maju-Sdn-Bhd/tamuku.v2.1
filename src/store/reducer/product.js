const initState = {
    userProdcut: [],
    allProduct: [],
    selected: null,
}


export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_PROD':
            return {
                ...state,
                allProduct: action.payload
            }
        case 'GET_USER_PROD':
            return {
                ...state,
                userProdcut: action.payload
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                userProdcut: [...state.userProdcut, action.payload]
            }
        case 'SELECT':
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}