export function setBoard(level){
    return (dispatch)=>{
        fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
        .then(res=>res.json())
        .then(data=>{
          dispatch({type:'board/setBoard', payload : data.board})
          dispatch({type:'userBoard/setInitialUserBoard', payload: data.board})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export function solveBoard(solvedData){
    return (dispatch)=>{
        console.log(solvedData,"solved data di action");
        dispatch({type:"userBoard/setInitialUserBoard", payload: solvedData})
    }
}

// export function setInitialUserBoard(initialBoard){
//     return (dispatch)=>{
//         dispatch({type:'userBoard/setInitialUserBoard', payload:initialBoard})
//     }
// }
export function setSolvedCondition(condition){
    return (dispatch)=>{
        dispatch({type:'solved/setSolvedCndition',payload:condition})
    }
}


export function setUserBoard(data){
    return (dispatch)=>{
        dispatch({type:'userBoard/setUserBoard', payload:data})
    }
}
