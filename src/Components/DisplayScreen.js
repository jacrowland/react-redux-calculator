import { useSelector } from "react-redux";

const styles = {
    fontSize: '1.4rem',
    marginBottom: '3px',
    height: '1.4rem'
}

const DisplayScreen = () => {
    const display = useSelector((state) => state.operations.display)
    return (
    <div id="display" style={styles}>
        {display.length > 15 ? 'DIGI LIMIT EXCEEDED' : display}
    </div>
    );
}

export default DisplayScreen;