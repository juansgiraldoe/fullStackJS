import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <h1>Desde el autoLayout</h1>
      <Outlet/>
    </>
  )
}

export default AuthLayout
