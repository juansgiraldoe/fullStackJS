import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import dog from '../img/dog.png'
import cat from '../img/cat.png'
import Alerta from '../components/Alerta';

const NuevoPassword = () => {

  const [ alerta, setAlerta ] = useState({});
  const [ password, setPassword ] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');
  const [tokenValido, setTokenValido] = useState(false)

  const params = useParams()
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/recuperar-pasword/${token}`;
        await axios.get(url);
        setTokenValido(true);
        setAlerta({
          msg: `Escribe tu nueva contraseña`,
        });
      } catch (error) {
        setAlerta({msg: `Hubo un error en el enlace`, error: true})
      }
    };
    comprobarToken();
  }, []);
  
  const { msg } = alerta;
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex w-full justify-center animate-fade-in-y">
          <img src={dog} alt="" className="h-10 md:h-20 lg:h-24 -rotate-12 -mr-3"/>
          <img src={cat} alt="" className="h-10 md:h-20 lg:h-24 rotate-12 -ml-3"/>
        </div>
        <h1 className="text-black font-bold 2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-center animate-fade-in-y-slower mb-5">
          Restablece tu<span className="text-indigo-600"> contraseña.</span>
        </h1>
      </div>
      <div className="justify-center border rounded-lg p-5 bg-white shadow-lg items-center">
        {msg && <Alerta 
            alerta={alerta}
        />}
        {tokenValido && (
        <form action="">
        <div className="mb-5">
          <input type="password"
            name=""
            id="password"
            autoComplete="on"
            placeholder="Tu nueva contraseña."
            className="border block w-full p-2 mt-2 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none mb-1"
            value={ password }
            onChange={ e => setPassword(e.target.value)}
          />
          <input type="password"
            name=""
            id="password-repeat"
            placeholder="Repite tu nueva contraseña."
            className="border w-full p-2 mt-2 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
            value={ repetirPassword }
            onChange={ e => setRepetirPassword(e.target.value)}
          />
          </div>
          <div className="flex md:justify-between items-center flex-col-reverse md:flex-row">
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/">¿Tienes una cuenta? Inicia sesión.</Link>
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/olvide-password">Olvide la contraseña</Link>
            <input
              type="submit"
              value="Restablecer"
              className="md:w-auto md:px-6 bg-indigo-600 w-full py-3 rounded-xl text-white uppercasse font-bold hover:cursor-pointer hover:bg-indigo-800 transition delay-100 duration-200 text-sm mb-5 md:mb-0"
            />
          </div>
        </form>
        )}
      </div>
    </>
  )
}

export default NuevoPassword
