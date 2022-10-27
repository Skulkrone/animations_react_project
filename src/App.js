import {Routes, Route} from 'react-router-dom'
import Liste from './Pages/Liste/Liste';
import Scroll from './Pages/Scroll/Scroll';
import StateAnim from './Pages/StateAnim/StateAnim';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
      <div className='global-container'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Liste></Liste>}></Route>
          <Route path="/scroll" element={<Scroll></Scroll>}></Route>
          <Route path="/stateanim" element={<StateAnim></StateAnim>}></Route>
        </Routes>
      </div>

  );
}

export default App;
