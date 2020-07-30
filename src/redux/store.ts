import {combineReducers, createStore} from 'redux';
import {loadingReducer} from "./loadingReducer";


export type AppRootType=ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    loading: loadingReducer,
})

// type AppRootState={
//     todoLists:Array<TodoListsType>,
//     tasks:TasksStateType
// }






export const store = createStore(rootReducer);


//@ts-ignore
window.store = store;