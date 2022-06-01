import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { actionCreators } from "../State/index"
import Button from "./Button"

const styles = {
    backgroundColor: 'black',
    width: '300px',
    height: '400px',
    padding: '10px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid white'
}

const outputStyles = {
    width: '100%',
    textAlign: 'right',
    marginBottom: 10
}
const formulaScreenStyles = {
    height: '1rem',
    fontSize: '0.9rem',
    marginBottom: '3px',
    marginTop: '3px',
    color: 'orange'
}

const outputScreenStyles = {
    fontSize: '1.4rem',
    marginBottom: '3px',
    height: '1.4rem'
}

const Calculator = props => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const { clearFormula, add, subtract, multiply, divide, pushDigit, evaluateFormula, addDecimalPoint } = bindActionCreators(actionCreators, dispatch); // can destructure these to get actions

    console.log(state);

    return (
        <div style={styles}>
            <div id="screens" style={outputStyles}>
                <div id="formula-screen" style={formulaScreenStyles}>
                {state.operations.formula.length > 25 ? 'FORMULA LIMIT EXCEEDED' : state.operations.formula}
                </div>
                <div id="display" style={outputScreenStyles}>
                    {state.operations.display.length > 15 ? 'DIGI LIMIT EXCEEDED' : state.operations.display}
                </div>
            </div>
            <div id="buttons" className="grid grid-col-4" style={{height: '100%'}}>
                <Button id="clear" style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#912d2d'}} onClick={() => clearFormula()}value="AC"/>
                <Button id="divide"  onClick={() => divide()} style={{backgroundColor: 'rgb(100, 100, 100)'}} value="/"/>
                <Button id="multiply"  onClick={() => multiply()} style={{backgroundColor: 'rgb(100, 100, 100)'}} value="x"/>
                <Button id="seven"  onClick={() => pushDigit(7)} value="7"/>
                <Button id="eight"  onClick={() => pushDigit(8)} value="8"/>
                <Button id="nine"  onClick={() => pushDigit(9)} value="9"/>
                <Button id="subtract"  onClick={() => subtract()} style={{backgroundColor: 'rgb(100, 100, 100)'}} value="-"/>
                <Button id="four"  onClick={() => pushDigit(4)} value="4"/>
                <Button id="five"  onClick={() => pushDigit(4)} value="5"/>
                <Button id="six"  onClick={() => pushDigit(4)} value="6"/>
                <Button id="add"  onClick={() => add()} style={{backgroundColor: 'rgb(100, 100, 100)'}} value="+"/>
                <Button id="one"  onClick={() => pushDigit(1)} value="1"/>
                <Button id="two"  onClick={() => pushDigit(2)} value="2"/>
                <Button id="three"  onClick={() => pushDigit(3)} value="3"/>
                <Button id="equals"  onClick={() => evaluateFormula()} value="=" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 4, gridRowEnd: 6, backgroundColor: '#153982'}}/>
                <Button id="zero"   onClick={()=>{pushDigit(0)}} value="0" style={{gridColumnStart: 1, gridColumnEnd: 3}}/>
                <Button id="decimal"  onClick={() => addDecimalPoint()} value="."/>
            </div>
        </div>
    );
}

export default Calculator;