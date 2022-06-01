
//import './App.css';

import Calculator from './Components/Calculator';

const styles = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#d5c6f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function App() {
  return (
    <div className="App" style={styles}>
      <Calculator/>
    </div>
  );
}

export default App;
