import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser, userLogin } from "../store/actions/userActions";
import { AxiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

const LoginPage = () => {
  //React Hook Form kullanilarak formun durumunu yonetme
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(userLogin(data, history));
  };

  return (
    <div className="flex flex-col items-center justify-center p-16 gap-8 rounded-xl">
      <div className="flex flex-col items-center  w-full gap-2">
        <h3 className="text-2xl font-bold ">Welcome back!</h3>
      </div>
      <div className="bg-white border border-gray-950 rounded-lg shadow-lg font-bold tracking-wider p-12 mt-10">
        <form
          className="flex flex-col w-full items-center gap-4 text-[#737373] space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group flex flex-col">
            <label className="email">Email </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="form-control border"
            />{" "}
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group flex flex-col">
            <label className="label">Password</label>
            <input
              className="border"
              type="password"
              id="pssword"
              {...register("password", { required: "Password is required" })}
            />{" "}
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button
            className="flex flex-col items-center border rounded-md bg-[#23A6F0] text-white px-4 py-2"
            type="submit"
          >
            Login
          </button>

          <p className="text-sm font-normal text-[#737373]">
            Not a member?{" "}
            <a href="/signup" className=" text-[#737373] underline">
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
