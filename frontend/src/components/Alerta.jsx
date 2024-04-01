const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'bg-red-500' : 'bg-green-600'} text-center text-white font-semibold text-sm rounded-xl py-2 mb-5 animate-alert alerta`}>
      {alerta.msg}
    </div>
  )
}

export default Alerta