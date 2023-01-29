const defaultState = {
    isVisible: false,
    isExist: false,
}

const SHOW_PRELOADER = "SHOW_PRELOADER";
const HIDE_PRELOADER = "HIDE_PRELOADER"; 
const REMOVE_PRELOADER = "REMOVE_PRELOADER"; 

export const preloaderReducer = (state = defaultState, action) => {
    switch (action.type){
        case SHOW_PRELOADER:
            return {...state, isVisible: true, isExist: true};
        case HIDE_PRELOADER:
            return {...state, isVisible: false, isExist: true};
        case REMOVE_PRELOADER:
            return {...state, isVisible: false, isExist: false};
        default:
            return state;
    }
}


export const showPreloaderAction = () => {
    return {
        type: SHOW_PRELOADER,
    }
}

export const hidePreloaderAction = () => {
    return {
        type: HIDE_PRELOADER,
    }
}

export const removePreloaderAction = () => {
    return {
        type: REMOVE_PRELOADER,
    }
}