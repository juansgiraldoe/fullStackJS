import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Confirmar from "./pages/Confirmar";
import Recuperar from "./pages/Recuperar";
import NuevoPassword from "./pages/NuevoPassword";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={ <AuthLayout /> }>
              <Route index element={<Login />}/>
              <Route path="registrar" element={<Registrar />}/>
              <Route path="confirmar/:id" element={<Confirmar />}/>
              <Route path="olvide-password" element={<Recuperar />}/>
              <Route path="olvide-password/:token" element={<NuevoPassword />}/>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    )
};

export default App
