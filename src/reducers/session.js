const sessionReducer = (state = 25, action) => {
    switch(action.type){
        case 'INCREASE_SESSION':
            return state + action.payload;
        case 'DECREASE':
            return state -1;
        case 'TICK_SESSION':
            return state -1;
        default:
            return state;
    }
}


export default sessionReducer;