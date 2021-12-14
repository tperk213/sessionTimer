export const increaseBreak = (nr=1) => {
    return{
        type: 'INCREASE_BREAK',
        payload: nr, 
    }
}

export const increaseSession = (nr=1) => {
    return{
        type: 'INCREASE_SESSION',
        payload: nr,
    }
}

export const tickBreak = () => {
    return{
        type: 'TICK_BREAK'
    }
}

export const tickSession = () => {
    return {
        type: 'TICK_SESSION',
    }

}

export const setBreak = (nr=5) => {
    return{
        type: 'SET_BREAK',
        payload: nr,
    }
}

export const toggleBreak = () => {
    return{
        type: 'TOGGLE_BREAK',
    }
}