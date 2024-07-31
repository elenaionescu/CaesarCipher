import './App.css';
import CaesarCipher from "./components/CaesarCipher";

function App() {

  return (
    <>
     <div>
      <h1>The Bots Frontend coding challenge</h1>
      <p>
        This will create a{' '}
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caeser Cipher</a>. <br />
        Please add an input, shift and direction. This will take any string and apply the
        cipher, then display the results below.
      </p>
      <CaesarCipher />
    </div>
    </>
  )
}

export default App
