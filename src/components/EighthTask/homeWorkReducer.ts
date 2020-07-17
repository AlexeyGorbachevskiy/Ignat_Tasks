import {v1} from "uuid";


type initialStateType = typeof initialState

let initialState = [
    {id: v1(), name: 'Alex', age: 23},
]

export type hwReducerActionTypes = PeopleArrACType


export const hwReducer = (state: initialStateType, action: hwReducerActionTypes) => {
    switch (action.type) {
        case SORT_BY_AGE: {
            if (action.payload === 'up') {
                const newState = state.sort((a, b) => a.age > b.age ? 1 : -1);
                return newState
            }
            if (action.payload === 'down') {
                const newState = state.sort((a, b) => a.age > b.age ? -1 : 1);
                return newState
            }
            if (action.payload === '18') {
                const newState = state.filter(human => human.age === 18);
                return newState
            }
        }
        default:
            return state
    }
};

export type PayloadType = 'up' | 'down' | '18'
const SORT_BY_AGE = 'SORT-BY-AGE';
type PeopleArrACType = {
    type: typeof SORT_BY_AGE,
    payload: PayloadType
}


export const setStatusAC = (payload: PayloadType): PeopleArrACType => ({type: SORT_BY_AGE, payload});


export default hwReducer;