import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RegistrationForm = () => {
  //React Hook Form kullanilarak formun durumunu yonetme
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //React Router kullanarak tarayici gecmisi yonetme

  const history = useHistory();

  //Sifre tekrari kontrolu icin watch fonksiyonunu kullanma

  const password = watch("password", "");

  //Rol bilgilerini ve diger durumlari yonetmek icin state kullanma

  const [roles, setRoles] = useState([]);
  const [selectedRoleID, setSelectedRoleID] = useState("3"); //default customer
  const [loading, setLoading] = useState(false);

  //Componentin yuklenmesi aninda rol bilgilerini API'den getirme

  useEffect(() => {
    AxiosInstance.get("/roles")
      .then((response) => {
        setRoles(response.data);
        //console.log(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  //Rol secimi degistiginde calisacak fonksiyon

  const handleRoleChange = (e) => {
    setSelectedRoleID(e.target.value);
    // console.log(selectedRoleID);
  };

  //Form submit islemi

  const submitForm = (data) => {
    let formData;

    //Secilen rol'e gore form verilerini duzenleme

    if (selectedRoleID === "2") {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        },
      };
    } else {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };
    }

    //Loading durumunu baslatma

    setLoading(true);
    console.log("Form data", formData);

    //2 saniye sonra axios ile signup endpoint'ine POST istegi gonderme

    setTimeout(() => {
      AxiosInstance.post("/signup", formData)
        .then((response) => {
          //Basarili istek durumunda
          console.log("submit succeeded:", response);
          toast.success(`${response.data.message}`);
          history.push("/"); //Anasayfa yonlendirme
        })
        .catch((error) => {
          //Hata durumunda
          console.log("Error:", error);
          if (error.response.data.err.errno === 19) {
            toast.error("This email address is already registered.");
          } else {
            toast.error(`${error.message}`);
          }
        })
        .finally(() => {
          //Loading durumunu sıfırlama
          setLoading(false);
        });
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-950 rounded-lg shadow-lg font-bold tracking-wider p-12 mt-10">
      <form
        className="flex flex-col w-full items-center gap-4 text-[#737373] space-y-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Name / Surname
            <input
              className="input w-full p-2 border"
              type="text"
              name="name"
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long!",
                },
              })}
              placeholder="Your Name"
            ></input>
          </label>
          <div className="error text-red-500">{errors?.name?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            E-mail
            <input
              className="input w-full p-2 border"
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address.",
                },
              })}
              placeholder="Your E-mail"
            ></input>
          </label>
          <div className="error text-red-500">{errors?.email?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Password
            <input
              className="input w-full p-2 border"
              type="password"
              name="password"
              value={password}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                  message:
                    "Password must include numbers, lowercase letters, uppercase letters, and special characters.",
                },
              })}
              placeholder="Your Password"
            ></input>
          </label>
          <div className="error text-red-500">{errors?.password?.message}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Confirm Password
            <input
              className="input w-full p-2 border"
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
              placeholder="Confirm Password"
            ></input>
          </label>
          <div className="error text-red-500">
            {errors?.confirmPassword?.message}
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="label">
            Role
            <select
              {...register("role_id", { required: "Role is required." })}
              className="input w-full p-2 border"
              name="role_id"
              onChange={handleRoleChange}
              value={selectedRoleID}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            <div className="error text-red-500">{errors?.role_id?.message}</div>
          </label>
        </div>
        {selectedRoleID === "2" && (
          <>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Name
                <input
                  className="input w-full p-2 border"
                  type="text"
                  name="storeName"
                  {...register("storeName", {
                    required: "Store Name is required.",
                    minLength: {
                      value: 3,
                      message: "Store Name must be at least 3 characters long.",
                    },
                  })}
                  placeholder="Store Name"
                />
              </label>
              <div className="error text-red-500">
                {errors?.storeName?.message}
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Phone
                <input
                  className="input w-full p-2 border"
                  type="tel"
                  name="storePhone"
                  {...register("storePhone", {
                    required: "Store Phone is required.",
                    pattern: {
                      value: /^(\+90\s?)?(\d{10})$/,
                      message: "Invalid Türkiye phone number.",
                    },
                  })}
                  placeholder="Store Phone"
                />
              </label>
              <div className="error text-red-500">
                {errors?.storePhone?.message}
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Tax ID
                <input
                  className="input w-full p-2 border"
                  type="text"
                  name="tax_no"
                  {...register("tax_no", {
                    required: "Store Tax ID is required.",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Invalid Store Tax ID.",
                    },
                  })}
                  placeholder="Store Tax ID"
                />
              </label>
              <div className="error text-red-500">
                {errors?.tax_no?.message}
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="label">
                Store Bank Account
                <input
                  className="input w-full p-2 border"
                  type="text"
                  name="bank_account"
                  {...register("bank_account", {
                    required: "Store Bank Account is required.",
                    pattern: {
                      value:
                        /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/,
                      message: "Invalid IBAN.",
                    },
                  })}
                  placeholder="Store Bank Account"
                />
              </label>
              <div className="error text-red-500">
                {errors?.bank_account?.message}
              </div>
            </div>
          </>
        )}
        <button className="flex justify-center self-center bg-[#156691] text-white w-min px-4 py-2 rounded active:scale-95">
          {loading ? (
            <>
              Submitting
              <svg className="animate-spin h-5 w-5 ml-3 border-t-2 border-white rounded-full"></svg>{" "}
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
