import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Confirmar from "./pages/Confirmar";
import Recuperar from "./pages/Recuperar";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AuthLayout /> }>
            <Route index element={<Login />}/>
            <Route path="registrar" element={<Registrar />}/>
            <Route path="confirmar/:id" element={<Confirmar />}/>
            <Route path="olvide-password" element={<Recuperar />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
};

export default App
