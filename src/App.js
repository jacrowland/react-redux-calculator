
//import './App.css';

import Calculator from './Components/Calculator';

const styles = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#d5c6f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

function App() {
  return (
    <div className="App" style={styles}>
      <Calculator/>
      <p style={{fontSize: '0.8rem'}}>Made by <a target="_blank" href="https://jacobrowland.me">Jacob Rowland</a></p>
    </div>
  );
}

export default App;
