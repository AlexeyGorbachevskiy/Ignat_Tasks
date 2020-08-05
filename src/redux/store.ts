import {combineReducers, createStore} from 'redux';
import {loadingReducer} from "./loadingReducer";
import {themeReducer} from "./themeRedcer";


export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    loading: loadingReducer,
    color: themeReducer,
})

// type AppRootState={
//     todoLists:Array<TodoListsType>,
//     tasks:TasksStateType
// }


export const store = createStore(rootReducer);


//@ts-ignore
window.store = store;