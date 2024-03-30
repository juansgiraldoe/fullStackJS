import { Link } from "react-router-dom";
import dog from '../img/dog.png'
import cat from '../img/cat.png'
const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-black font-bold 2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-center">
          Inicia sesión y administra tus<span className="text-indigo-600"> pacientes. </span>
          <div className="inline-block md:h-10"><img src={dog} alt="" className="h-5 md:h-14"/></div><div className="inline-block md:h-10"><img src={cat} alt="" className="h-5 md:h-14"/></div>
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <form action=""
          className="flex flex-col"
        >
          <div className="mb-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold"
            >
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-bold">
              Email
            </span>
            </label>
            <input type="email"
              name=""
              id=""
              placeholder="Email de registro."
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor=""
              className="uppercase text-gray-600"
            >
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-bold">
              Password
            </span>
            </label>
            <input type="password"
              name=""
              id=""
              placeholder="Contraseña."
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <div className="flex md:justify-between items-center flex-col-reverse md:flex-row">
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/registrar">¿No tienes una cuenta? Registrate</Link>
            <Link
            className="text-xs hover:text-indigo-600 hover:font-medium text-gray-500 block md:inline text-center"
            to="/olvide-password">Olvide la contraseña</Link>
            <input
              type="submit"
              value="Iniciar sesion"
              className="md:w-auto md:px-7 uppercase bg-indigo-600 w-full py-3 rounded-xl text-white uppercasse font-bold hover:cursor-pointer hover:bg-indigo-700 transition delay-100 duration-300 text-xs mb-5 md:mb-0"
            />
          </div>
        </form>
      </div>
    </>
  )
};

export default Login
