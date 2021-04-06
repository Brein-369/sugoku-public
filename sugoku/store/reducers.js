const initialState ={
    board: [],
    userBoard:[],
    solvedCondition: false
}

function reducer(state= initialState, action){
    const{type,payload} = action
    if(type === 'board/setBoard'){
        console.log('masuk set Board<<<');
        return {...state, board:payload}
    }
    else if (type === 'board/setSolved'){
        return {...state, board:payload}
    }
    else if (type ==='userBoard/setInitialUserBoard'){
        console.log('masuk set userBoard<<<');
        return {...state, userBoard:payload}
    }
    else if(type ==="solved/setSolvedCndition"){
        return {...state, solvedCondition:payload}
    }
    else if (type === 'userBoard/setUserBoard'){
        console.log(payload, 'payload di set one userboard reducers');
        console.log(state.userBoard, 'userBoard di reducers');
        return {...state, 
            userBoard:[...state.userBoard], 
            ...state.userBoard[payload.row][payload.col]= payload.userNumber 
        }
    }
    return state
}

export default reducer