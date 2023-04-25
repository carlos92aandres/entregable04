import React from "react";
import UsersCard from "./UsersCard";
import PutUser from "./PutUser";

const UsersList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_300px)] justify-center ">
      {users==("") ? (<PutUser />
      ) : 
        
        
          users.map((user) => (
            <UsersCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              handleClickEdit={handleClickEdit}
            />
          ))
      }
    </section>
  );
};

export default UsersList;
