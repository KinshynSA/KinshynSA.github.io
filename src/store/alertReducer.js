const defaultState = {
    alerts: [],
}

const ADD_ALERT = "ADD_ALERT";
const REMOVE_ALERT = "REMOVE_ALERT";

export const alertReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_ALERT:
            return {...state, alerts: [...state.alerts, action.payload]};
        case REMOVE_ALERT:
            return {...state, alerts: state.alerts.filter(alert => alert.id !== action.payload.id)};
        default:
            return state;
    }
}

export const addAlertAction = (payload) => {
    return {
        payload: {...payload, id: Date.now()},
        type: ADD_ALERT,
    }
} 

export const removeAlertAction = (payload) => {
    return {
        payload,
        type: REMOVE_ALERT,
    }
} 