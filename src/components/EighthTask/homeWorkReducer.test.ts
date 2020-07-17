import {v1} from 'uuid';

import {
    hwReducer, setStatusAC
} from "./homeWorkReducer";


test('hwReducer should sort people by age ascending', () => {

    const state=[
        {id:v1(),name:'Alex', age:23},
        {id:v1(),name:'Boris', age:16},
        {id:v1(),name:'Clark', age:18},
        {id:v1(),name:'Bob', age:13},
        {id:v1(),name:'Alexander', age:30},
    ]
    const payload='up'
    const endState = hwReducer(state, setStatusAC(payload))

    expect(endState.length).toBe(5);
    expect(endState[0].name).toBe('Bob');
    expect(endState[endState.length-1].name).toBe('Alexander');
});


test('hwReducer should sort people by age descending', () => {

    //Array<{id: string, name: string, age: number}>
    const state=[
        {id:v1(),name:'Alex', age:23},
        {id:v1(),name:'Boris', age:16},
        {id:v1(),name:'Clark', age:18},
        {id:v1(),name:'Bob', age:13},
        {id:v1(),name:'Alexander', age:30},
    ]
    const payload='down'
    const endState = hwReducer(state, setStatusAC(payload))

    expect(endState.length).toBe(5);
    expect(endState[0].name).toBe('Alexander');
    expect(endState[endState.length-1].name).toBe('Bob');
});


test('hwReducer should sort people by age equals 18', () => {

    //Array<{id: string, name: string, age: number}>
    const state=[
        {id:v1(),name:'Alex', age:23},
        {id:v1(),name:'Boris', age:18},
        {id:v1(),name:'Clark', age:18},
        {id:v1(),name:'Bob', age:13},
        {id:v1(),name:'Alexander', age:18},
    ]
    const payload='18'
    const endState = hwReducer(state, setStatusAC(payload))

    expect(endState.length).toBe(3);
    expect(endState[0].name).toBe('Boris');
    expect(endState[1].name).toBe('Clark');
    expect(endState[2].name).toBe('Alexander');
});