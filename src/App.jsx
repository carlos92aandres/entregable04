import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";

const DEFAULT_VALUES = {
  first_name: "",

  last_name: "",

  email: "",

  password: "",

  birthday: "",

  image_url: "",
};

const BASE_URL = "https://users-crud.academlo.tech";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState();
  const { handleSubmit, reset, register, formState:{errors} } = useForm();
  console.log(errors)

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null

    }

    if(!data.image_url){
      data.image_url= null
    }
    console.log(data)

    



    if (isUserIdToEdit) {
      editUser(data);
      
    } else {
      
      createUser(data);
    }
  };
  const createUser = (data) => {
    const URL = BASE_URL + "/users/";
    axios
      .post(URL, data)
      .then(() => {
        getAllUsers(), reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
        setIsUserIdToEdit()
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;
    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  const handleShowModal = () => {
    setIsShowForm(!isShowForm);
  };
  const handleHiddenModal = () => {
    setIsShowForm(!isShowForm);
    reset(DEFAULT_VALUES);
    setIsUserIdToEdit();
  };
  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset(data);
    setIsUserIdToEdit(data.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  

  return (
    <main className="font-sans">
      <Header handleShowModal={handleShowModal} />
      <Modal
        isShowForm={isShowForm}
        handleHiddenModal={handleHiddenModal}
        handleSubmit={handleSubmit}
        register={register}
        submit={submit}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
      />
    </main>
  );
}

export default App;
