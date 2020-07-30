

const initialState={loading: false}

export type InitialStateType=typeof initialState;

type ActionType = SetLoadingActionType;

export const loadingReducer = (state: InitialStateType=initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case SET_LOADING: {
            return {...state, loading: action.loading}
        }

        default: {
            return state
        }
    }
}


const SET_LOADING='SET_LOADING';

export type SetLoadingActionType = {
    type: typeof SET_LOADING
    loading:boolean
}


export const setLoadingAC = (loading: boolean): SetLoadingActionType => {
    return {type: SET_LOADING, loading: loading}
}


