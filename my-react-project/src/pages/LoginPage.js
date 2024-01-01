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
            className="form-control"
          />{" "}
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            id="pssword"
            {...register("password", { required: "Password is required" })}
          />{" "}
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
