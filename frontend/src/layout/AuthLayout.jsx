import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="md:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 p-6">
        <Outlet/>
      </main>
    </>
  )
};

export default AuthLayout
