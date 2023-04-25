import React from 'react'

const Header = ({handleShowModal}) => {
  return (
    <header className="flex justify-between px-2 h-[100px] items-center shadow-sm shadow-gray-500">
        <h1 className='text-3xl font-bold'>Usuarios</h1>

        <button onClick={()=>handleShowModal()} className="bg-purple-p p-2 text-white my-1 hover:bg-purple-p/90 transition-colors text-sm rounded-md"><i className='bx bx-plus'></i>

Crear nuevo usuario</button>
    </header>
  )
}

export default Header