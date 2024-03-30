import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="md:w-3/5 md:mx-auto grid sm:grid-cols-1 2xl:grid-cols-2 gap-6 p-12 border rounded-xl lg:h-4/5 bg-white shadow-md mx-4">
        <Outlet/>
      </main>
    </>
  )
};

export default AuthLayout
