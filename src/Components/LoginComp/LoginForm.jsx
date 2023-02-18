import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogIn } from "../../api/user";
import { storageSave } from "../../misc/storage";
import { useUser } from "../../Context/UserProvider";
import { STORAGE_USER_KEY } from "../../misc/storageKeys";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user, setUser} = useUser()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [apiError, SetApiError] = useState(null);

  // redirecting to /translation if user is found
  useEffect(()=>{
    if (user != null) navigate('translation')
  },[user, navigate])

  const onSubmit = async ({ username }) => {
    setLoading(true); // loading text appears
    const [error, userResponse] = await userLogIn(username);
    if (error != null) SetApiError(error);
    if (userResponse != null) {
      storageSave(STORAGE_USER_KEY, userResponse); //save user to local storage
      setUser(userResponse) //loading text disappears
    }
    setLoading(false);
  };

  const errorDisplay = (() => {
    if (!errors.username) return null;
    if (errors.username.type === "required")
      return <span> Empty username</span>;
    else if (errors.username.type === "minLength")
      return <span> username is too short </span>;
    // return <span>Username ok!</span> doesnt work yet idk
  })();

  return (
    <>
      <h1>LoginForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            {...register("username", usernameConfig)}
            placeholder="username"
          />
          {errorDisplay}
        </fieldset>
        <button type="submit" disabled={loading}>
          LogIn
        </button>
        {loading && <p>Redirecting</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default LoginForm;
