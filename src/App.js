import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Emplisting from "./Emplisting";
import EmpDetails from "./EmpDetails";
import EmpEdit from './EmpEdit'
import Empcreate from './Empcreate'

function App() {
 
  return (
    <div className="App">
      <h1 className="text-center">react js crud operation</h1>
      <BrowserRouter>
      <Routes>
  <Route path='/' element={<Emplisting/>} ></Route>
  <Route path='/empDetails/:id' element={<EmpDetails/>} ></Route>
  <Route path='/empcreate' element={<Empcreate />} ></Route>
  <Route path='/empEdit/:myid' element={<EmpEdit/>} ></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );

}

export default App;
