import firestore from '@react-native-firebase/firestore'

export const getAllRooms = (user) => async (dispatch) => {
    const rooms = await firestore().collection('messages').get()
    let data = []

    rooms._docs.map(item => item._data.room_id.includes(user) ? data.push(item._data) : '')
    return dispatch({
        type: 'GET_ROOMS',
        payload: data,
    })
};

export const getRoom = (rooms, id) => dispatch => {
    console.log(id);
    return dispatch({
        type: 'GET_ROOM',
        payload: rooms.filter(item => item.room_id === id)[0]
    })
}


export const sendMessage = (msg, id) => async dispatch => {
    const room = await firestore().collection('messages').where('room_id', '==', id).get()
    const data = room._docs[0]._data
    const docID = room._docs[0].id
    await firestore().collection('messages').doc(docID).update({
        ...data,
        messages: [...data.messages, msg],
        seen: false,
    })

    return dispatch({
        type: 'SEND_MSG',
        payload: msg,
    })
}