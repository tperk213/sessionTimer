const breakReducer = (state = {time:5, isRunning:false}, action) => {
    switch(action.type){
        case 'INCREASE_BREAK':
            return {
                ...state, 
                time: state.time + action.payload};
        case 'DECREASE':
            return{
            ...state, 
            time: state.time - action.payload};
        case 'TICK_BREAK':
            return{
            ...state, 
            time: state.time - 1};
        case 'SET_BREAK':
            return{
                ...state, 
                time: action.payload};
        case 'TOGGLE_BREAK':
            return{
                ...state, 
                isRunning: !state.isRunning};
        default:
            return state;
    }
}

export default breakReducer; 
