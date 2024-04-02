import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import dog from '../img/dog.png'
import cat from '../img/cat.png'
import Alerta from '../components/Alerta';

const Confirmar = () => {
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false);
  const [ cargando, setCargando ] = useState(true);
  const [ alerta, setAlerta ] = useState({});

  const params = useParams()
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`;
        const { data } = await axios.get(url);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
      };
      setCargando(false)
    };
    confirmarCuenta();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex w-full justify-center animate-fade-in-y">
          <img src={dog} alt="" className="h-16 md:h-28 lg:h-32 -rotate-12 -mr-3"/>
          <img src={cat} alt="" className="h-16 md:h-28 lg:h-32 rotate-12 -ml-3"/>
        </div>
      </div>
      <div className="justify-center border rounded-lg p-5 bg-white shadow-lg">
        <h1 className="text-black font-bold 2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-center animate-fade-in-y-slower mb-5">
          Bienvenido a<span className="text-indigo-600"> APV. </span>
        </h1>
        {/* <h4 className="text-black font-medium 2xl:text-xl lg:text-xl sm:text-4xl text-2xl text-center animate-fade-in-y-slower">
          Confirmamos tu cuenta, ya puedes administrar pacientes.<span className="text-indigo-600"> pacientes. </span>
        </h4> */}
        {!cargando && <Alerta
          alerta={alerta}
        />}
        { cuentaConfirmada && (
          <Link
            className="w-full block md:px-6 py-3 rounded-xl text-indigo-600 uppercasse hover:cursor-pointer hover:border-indigo-600 hover:border-2 transition duration-200 text-lg mb-5 md:mb-0 text-center font-semibold"
            to="/">Iniciar sesion.
          </Link>
        )}
      </div>
    </>
  )
};

export default Confirmar
