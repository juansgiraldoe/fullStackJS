import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";
import dog from '../img/dog.png'
import cat from '../img/cat.png'

const Recuperar = () => {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const  handleSubmit = async e => {
    e.preventDefault();

    if (email.trim === '' || email.length < 6) {
      setAlerta({msg: 'El correo no es valido.', error: true});
      return;
    };

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios`

      const {data} = await axios.post(`${url}/recuperar-pasword`, {email,});
      setAlerta({msg: data.msg,})
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      })
    }
  };

  const {msg} = alerta;

  return (
    <>
    <div className="flex flex-col justify-center">
        <div className="flex w-full justify-center animate-fade-in-y">
          <img src={dog} alt="" className="h-10 md:h-20 lg:h-24 -rotate-12 -mr-3"/>
          <img src={cat} alt="" className="h-10 md:h-20 lg:h-24 rotate-12 -ml-3"/>
        </div>
        <h1 className="text-black font-bold 2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-center animate-fade-in-y-slower">
          Recupera tu cuenta y administra tus<span className="text-indigo-600"> pacientes. </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center border rounded-lg p-5 bg-white shadow-lg">
        <form action=""
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* Input email */}
          <div className="mb-5">
            <label 
              htmlFor="email"
              className="text-gray-600 block text-xl font-bold"
            >
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold">
              Email
            </span>
            </label>
            <input type="email"
              name=""
              id="email"
              placeholder="Tu correo electronico."
              value={email}
              onChange={e=> setEmail(e.target.value)}
              className="border w-full p-2 mt-2 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
            />
          </div>
          {msg && <Alerta 
            alerta={alerta}
          />}
          <div className="flex md:justify-between items-center flex-col-reverse md:flex-row">
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/">¿Tienes una cuenta? Inicia sesión.</Link>
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/registrar">Crear una cuenta</Link>
            <input
              type="submit"
              value="Recuperar"
              className="md:w-auto md:px-6 bg-indigo-600 w-full py-3 rounded-xl text-white uppercasse font-bold hover:cursor-pointer hover:bg-indigo-800 transition delay-100 duration-200 text-sm mb-5 md:mb-0"
            />
          </div>
        </form>
      </div>
    </>
  )
};

export default Recuperar
