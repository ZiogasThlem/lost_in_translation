import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogIn } from "../../api/user";
import { storageSave, STORAGE_USER_KEY } from "../../miscellaneous/storage";
import { useUser } from "../../Context/UserProvider";

// criteria for valid username
const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  // hook for input-button form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, SetApiError] = useState(null);

  // redirecting to /translation if user is found
  useEffect(() => {
    if (user != null) navigate("translation");
  }, [user, navigate]);

  // submiting username, and registering it to the API,
  // if it doesn't already exist
  const onSubmit = async ({ username }) => {
    setLoading(true); // loading text appears
    const [error, userResponse] = await userLogIn(username);
    if (error != null) SetApiError(error);
    if (userResponse != null) {
      storageSave(STORAGE_USER_KEY, userResponse); //save user to local storage
      setUser(userResponse);
    }
    setLoading(false); //loading text disappears
  };

  // displaying each of these errors 
  // while username is invalid, according
  // to their condition
  const errorDisplay = (() => {
    if (!errors.username) return null;
    if (errors.username.type === "required")
      return <span className="login-error"> Empty username</span>;
    else if (errors.username.type === "minLength")
      return <span className="login-error"> username is too short </span>;
  })();

  return (
    <form
      className="input-group-lg"
      id="login"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset id="login-form">
        <input
          type="text"
          {...register("username", usernameConfig)}
          placeholder="Mr. Usemyhandstotalk"
          className="form-control"
        />
        {errorDisplay}
      </fieldset>
      <button
        type="submit"
        disabled={loading}
        className="btn btn-lg btn-primary"
      >
        LogIn
      </button>
      {loading && <p id="redirecting">Redirecting</p>}
      {apiError && <p>{apiError}</p>}
    </form>
  );
};

export default LoginForm;
