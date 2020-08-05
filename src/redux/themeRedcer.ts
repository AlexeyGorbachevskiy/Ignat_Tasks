


const initialState = {color:'#27ae60'}
export type InitialStateType = typeof initialState;

type ActionType = SetThemeActionType;

export const themeReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_THEME: {
            return {...state,color:action.color}
        }

        default: {
            return state
        }
    }
}


const SET_THEME = 'SET_THEME';

export type SetThemeActionType = {
    type: typeof SET_THEME
    color: string
}


export const setThemeAC = (color: string): SetThemeActionType => {
    return {type: SET_THEME, color: color}
}


