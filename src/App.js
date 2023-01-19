import logo from './logo.svg';
import useWindowSize from 'react-use/lib/useWindowSize'
import './App.css';
import Confetti from 'react-confetti'

function App() {
  const { width, height } = useWindowSize()

  return (
    <div className="App">
          <h1 class="sweet-title">

      Happy Birthday My love(Ammulu)<span style={{marginLeft:20}}>&hearts;</span>
      </h1>
      <Confetti
      width={width}
      height={height}
    />
    </div>
  );
}

export default App;
