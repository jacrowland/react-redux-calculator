import { useSelector } from "react-redux";

const styles = {
    height: '1rem',
    fontSize: '0.9rem',
    marginBottom: '3px',
    marginTop: '3px',
    color: 'orange'
}

const FormulaScreen = (props) => {
    const formula = useSelector((state) => state.operations.formula)
    return (
        <div id="formula-screen" style={styles}>
            {formula.length > 25 ? 'FORMULA LIMIT EXCEEDED' : formula}
        </div>
    );
}

export default FormulaScreen;