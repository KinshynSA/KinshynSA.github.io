const defaultState = {
    isVisible: false,
    isExist: false,
}

const SHOW_PRELOADER = "SHOW_PRELOADER";
const SHOW_PRELOADER_GLOBAL = "SHOW_PRELOADER_GLOBAL";
const HIDE_PRELOADER = "HIDE_PRELOADER"; 
const REMOVE_PRELOADER = "REMOVE_PRELOADER"; 

export const preloaderReducer = (state = defaultState, action) => {
    switch (action.type){
        case SHOW_PRELOADER:
            return {...state, isVisible: true, isExist: true};
        case SHOW_PRELOADER_GLOBAL:
            return {...state, isVisible: true, isExist: true, isGlobal: true};
        case HIDE_PRELOADER:
            return {...state, isVisible: false, isExist: true};
        case REMOVE_PRELOADER:
            return {...state, isVisible: false, isExist: false, isGlobal: false};
        default:
            return state;
    }
}

export const showPreloaderGlobalAction = () => {
    return {
        type: SHOW_PRELOADER_GLOBAL,
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