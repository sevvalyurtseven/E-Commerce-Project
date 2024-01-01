import { useForm } from "react-hook-form";

const LoginPage = () => {
  //React Hook Form kullanilarak formun durumunu yonetme
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p className="title">Login Form</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="email">
            Email
            <input type="text" {...register("email")} />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            Password
            <input type="password" {...register("password")} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
