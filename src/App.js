import Layout from "./views/Layout/Layout";
import Login from "./views/Login/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/layout' element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
