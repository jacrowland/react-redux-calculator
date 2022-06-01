const defaultState = {
    display: '0',
    formula: ''
}

const operations = ['+', '-', '/', '*', '.'];

const reducer = (state = defaultState, action) => {


    switch(action.type) {
        case 'CLEAR':
            return defaultState
        case 'ADD':
            return {
                display: '+',
                formula: operations.includes(state.formula.substring(state.formula.length-1)) || operations.includes(state.formula.substring(state.formula.length-2)) === '+' ? state.formula.substring(0, state.formula.length-2) + '+' : state.formula + '+'
            };
        case 'SUBTRACT':
            return {
                display: '-',
                formula: operations.includes(state.formula.substring(state.formula.length-1)) && state.formula.substring(state.formula.length-1) !== '+' ? state.formula.substring(0, state.formula.length-1) + '-' : state.formula + '-'
            };
        case 'DIVIDE':
            console.log(state.formula.substring(state.formula.length-1));
            return {
                display: '/',
                formula: operations.includes(state.formula.substring(state.formula.length-1)) ? state.formula.substring(0, state.formula.length-1) + '/' : state.formula + '/'
            };
        case 'MULTIPLY':
            return {
                display: '*',
                formula: operations.includes(state.formula.substring(state.formula.length-1)) ? state.formula.substring(0, state.formula.length-1) + '*' : state.formula + '*'
            };
        case 'EQUALS':
            const result = parseFloat(eval(state.formula).toFixed(2));
            return {
                formula: state.formula + '=' + result,
                display: result
            };
        case 'DECIMAL':
            return {
                display: state.display.includes('.') ? state.display : operations.includes(state.display.substring(state.display.length-1)) ? '0.' : state.display + '.',
                formula: state.display.includes('.') ? state.formula : operations.includes(state.display.substring(state.display.length-1)) ? state.formula + '0.' : state.formula + '.'
            };
        case 'DIGIT':
            const digit = action.payload;
            return {
                display: state.display.substring(0) === '0' ? `${digit}` : state.display + `${digit}`,
                formula: state.formula.substring(0) === '0' ? `${digit}` : state.formula + `${digit}`
            }
        default:
            return state
    }
}

export default reducer;