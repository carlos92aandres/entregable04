import React from "react";

const Modal = ({
  isShowForm,
  handleHiddenModal,
  handleSubmit,
  register,
  submit,
  isUserIdToEdit,
  setIsUserIdToEdit,
  errors,
}) => {
  console.log(errors);
  return (
    <div>
      <section
        className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity   ${
          isShowForm ? "opacity-100 visible z-10" : "opacity-0 invisible"
        }`}
      >
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white  p-3  grid gap-4 w-[300px] absolute "
        >
          <h3 className="font-bold text-2xl">
            {isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}
          </h3>
          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="first_name">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              className="outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="first_name"
              type="text"
              {...register("first_name", {
                required: "Este campo es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener más de dos carácteres",
                },
                maxLength: {
                  value: 14,
                  message: "Este campo acepta máximo 14 carácteres",
                },
              })}
            />
            <span className="text-red-500 text-center text-xs">
              {" "}
              {errors.first_name && errors.first_name.message}{" "}
            </span>
          </div>

          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="last_name">
              Apellidos <span className="text-red-500">*</span>
            </label>
            <input
              className=" outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="last_name"
              type="text"
              {...register("last_name", {
                required: "Este campo es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener más de dos carácteres",
                },
                maxLength: {
                  value: 14,
                  message: "Este campo acepta máximo 14 carácteres",
                },
              })}
            />
            <span className="text-red-500 text-center text-xs"> {errors.last_name && errors.last_name.message} </span>
          </div>
          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="email">
              Correo <span className="text-red-500">*</span>
            </label>
            <input
              className=" outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="email"
              type="email"
              {...register("email", {
                required: "Este campo es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener más de dos carácteres",
                },
                maxLength: {
                  value: 20,
                  message: "Este campo acepta máximo 14 carácteres",
                },
              })}
            />
            <span className="text-red-500 text-center text-xs"> {errors.email && errors.email.message} </span>
          </div>
          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="password">
              Contraseña <span className=" text-red-500">*</span>
            </label>
            <input
              className=" outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="password"
              type="password"
              {...register("password", {
                required: "Este campo es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener más de dos carácteres",
                },
                maxLength: {
                  value: 20,
                  message: "Este campo acepta máximo 14 carácteres",
                },
              })}
            />
            <span className="text-red-500 text-center text-xs"> {errors.password && errors.password.message} </span>
          </div>
          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="birthday">
              Cumpleaños
            </label>
            <input
              className=" outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="birthday"
              type="date"
              {...register("birthday")}
            />
          </div>
          <div className="grid gap-1 ">
            <label className="text-xs font-semibold" htmlFor="URL_image">
              URL imagen
            </label>
            <input
              className="outline-none border-1 rounded-sm bg-gray-100 p-1"
              id="image_url"
              type="text"
              {...register("image_url", {
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                  message: "Ingrese una URL valida",
                },
              })}
            />
            <span>{errors.image_url && errors.image_url.message}</span>
          </div>
          <i
            onClick={() => handleHiddenModal()}
            className=" absolute bx bx-x top-2 right-2 text-2xl hover:text-red-500 cursor-pointer"
          ></i>
          <button className="bg-purple-p p-2 text-white my-1 hover:bg-purple-p/90 transition-colors text-sm">
            {isUserIdToEdit ? "Actualizar usuario" : "Crear usuario"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
