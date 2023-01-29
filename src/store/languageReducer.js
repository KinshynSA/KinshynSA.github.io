const defaultState = {
    lang: localStorage.getItem('language') ?? 'ua',
}

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const languageReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_LANGUAGE:
            localStorage.setItem('language',action.payload);
            return {...state, lang: action.payload};
        default:
            return state;
    }
}


export const changeLanguageAction = (payload) => {
    return {
        payload,
        type: CHANGE_LANGUAGE,
    }
} 