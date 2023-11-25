import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MenIcon from "../../assets/icons/Mesa de trabajo 1 1.png";
import { IconButton, InputAdornment, Input } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: "",
      name: "",
      password: "",
      agreed: false,
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Выберите роль"),
      name: Yup.string().required("Введите имя"),
      password: Yup.string().required("Введите пароль"),
      agreed: Yup.boolean().oneOf(
        [true],
        "Вы должны согласиться с условиями использования"
      ),
    }),
    initialTouched: {
      role: false,
      name: false,
      password: false,
      agreed: false,
    },
    initialErrors: {
      role: "",
      name: "",
      password: "",
      agreed: "",
    },
  });

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[40%] h-[80vh] flex flex-col pl-[7rem]">
        <div className="flex flex-col gap-4">
          <p className="w-[24.5625rem] h-[9rem] mt-12 text-[2rem] font-[700] ">
            Мы ‘Lider Mobile’ больше чем сеть магазинов!
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 justify-center">
              <input
                type="radio"
                className="bg-blue-300 rounded-full text-white w-4 h-4 border-[8] border-blue"
                name="role"
                onChange={() => formik.setFieldValue("role", "Директор")}
                checked={formik.values.role === "Директор"}
              />{" "}
              <span>Директор</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <input
                type="radio"
                className="bg-blue-500 rounded-full text-white w-4 h-4 border-[8] border-blue"
                name="role"
                onChange={() => formik.setFieldValue("role", "Сотрудник")}
                checked={formik.values.role === "Сотрудник"}
              />{" "}
              <span>Сотрудник</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col mt-4" onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col gap-1 relative">
            <p className="font-[700]">Имя</p>
            <input
              className="w-[29.375rem] h-[2.625rem] rounded-[5px] border-gray border-[2px] p-4"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 absolute top-[4.2rem] text-[12px]">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          <div className="mt-[1rem] flex flex-col gap-1 relative">
            <p className="font-[700]">Пароль</p>
            <Input
              className="w-[29.375rem] h-[2.625rem] rounded-[5px] border-gray border-[2px] p-4 focus:border-b-0 "
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="new-password"
              endAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />

            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 absolute top-[4.2rem] text-[12px]">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <div className="mt-5 flex items-center gap-2 ">
            <input
              type="checkbox"
              className="w-4 h-4"
              name="agreed"
              onChange={() =>
                formik.setFieldValue("agreed", !formik.values.agreed)
              }
              checked={formik.values.agreed}
            />{" "}
            <span className="text-[#7C7C7C]">Я подтвердил все мои данные</span>
            {formik.touched.agreed && formik.errors.agreed ? (
              <p className="text-red-500">{formik.errors.agreed}</p>
            ) : null}
          </div>
        </form>

        <div className="mt-8">
          <button
            type="submit"
            className={`w-[29.375rem] h-12 rounded-[7px] ${
              formik.isValid ? "bg-[#4AC4F3]" : "bg-gray-400"
            } text-white`}
          >
            Войти
          </button>
        </div>
      </div>
      <div className="w-[60%] h-[100vh] bg-[#52C8F4] flex flex-col gap-[3rem]">
        <div className="w-[100%] flex justify-center ">
          <img src={MenIcon} alt="" />
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center gap-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-white text-[3rem] w-[41.375rem] leading-[3.5787rem] text-center font-[600]">
              CRM система для персонала “Lider Mobile”
            </p>
            <p className="w-[17rem] h-[0.4375rem] bg-[#C5E2FF] mx-auto " />
          </div>
          <p className="w-[31rem] h-[3.8125rem] text-[1rem] text-[#FFFFFF] font-[400] leading-[1.2263rem] text-center">
            Streamlined, automated investment process allowing investors to
            connect with vetted, screened and pre-vetted investment
            opportunities
          </p>
        </div>
      </div>
    </div>
  );
};
