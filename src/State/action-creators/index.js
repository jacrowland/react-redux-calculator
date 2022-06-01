/*
export const clearFormula = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR',
        })
    }
}
*/

export const clearFormula = () => {
    return {
            type: 'CLEAR',
        }
}
export const add = () => {
    return {
            type: 'ADD'
        }
}

export const subtract = () => {
    return {
            type: 'SUBTRACT'
    }
}

export const multiply = () => {
    return {
            type: 'MULTIPLY'
        }
}

export const divide = () => {
    return {
            type: 'DIVIDE'
    }
}

export const evaluateFormula = () => {
    return {
            type: 'EQUALS'
        }
}

export const addDecimalPoint = () => {
    return {
            type: 'DECIMAL'
    }
}

export const pushDigit = (digit) => {
    return {
            type: 'DIGIT',
            payload: digit
    }
}