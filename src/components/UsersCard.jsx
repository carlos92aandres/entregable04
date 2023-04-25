import React from 'react'

const UsersCard = ({user,deleteUser,handleClickEdit}) => {
  return (
    <article className=' relative border-1  shadow-sm shadow-gray-500 rounded-sm grid gap-2  my-5'>
        <div>
            {
                user.image_url ? (
                    <img className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md my-1' src={user.image_url} alt="User image" />
                ): <img className='  w-[100px] aspect-[3/5] object-cover mx-auto rounded-md my-1' src="./images/noimage.jpg" alt="No porfile" />
            }
        
        </div>
        <h3 className='font-bold text-xl text-center'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='p-3 grid gap-3'>
            <li>
                <h4 className='text-sm '>Correo:</h4>
                <span>{user.email}</span>
            </li>
            <li>
                <h4 className='text-sm'>Cumpleaños: </h4>
                <span><i className='bx bx-gift'></i>
                {user.birthday}</span>
            </li>
        </ul>
        <div className=''>
            <button onClick={()=>deleteUser(user.id)}>
            <i className='bx bxs-trash bg-red-p p-2 rounded-md absolute right-[80px] bottom-3 text-white border-1 border-[#D93F3F]'></i>
            
            </button>
            <button onClick={()=>handleClickEdit(user)}>
            <i className='bx bx-pencil bg-[#F6F6F6] text-[#BDBDBD] rounded-md p-2 absolute right-8 bottom-3 border-1 border-[#BDBDBD]'></i>
            </button>
        </div>
    </article>
  )
}

export default UsersCard