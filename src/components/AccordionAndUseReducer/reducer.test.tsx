import {reducer, StateType} from "./reducer";

test('reducer should change value to opposite value', () => {
    // data
const state: StateType = {collapsed: false}


const endState = reducer(state, {type:'TOGGLE-COLLAPSED'})    // action



expect(endState.collapsed ).toBe(true)//
})

test('throw error', () => {
    // data
    const state: StateType = {collapsed: false}

    expect(()=>{reducer(state, {type:'FAKE_TYPE'})}).toThrowError()//
})