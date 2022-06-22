const initialState = {
    value: 0
}
type StateType = {
    value: number
}
type IncreaseValueType = {
    type: 'INCREASE'
}
type DecreaseValueType = {
    type: 'DECREASE'
}
type LoadFromLocalStorageType = {
    type: 'LOAD'
    value: number
}

type ActionsType = IncreaseValueType
    | DecreaseValueType
    | LoadFromLocalStorageType

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                value: state.value + 1
            }

        case 'DECREASE':
            return {
                ...state,
                value: state.value - 1
            }
        case "LOAD":
            return {
                ...state,
                value:action.value
            }
        default:
            return state

    }
}

export const increaseValueAC = () => {
    return {type: 'INCREASE'}
}
export const decreaseValueAC = () => {
    return {type: 'DECREASE'}
}
export const loadValueFromLocalStorageAC = (value: number) => {
    return {type: 'LOAD', value}
}