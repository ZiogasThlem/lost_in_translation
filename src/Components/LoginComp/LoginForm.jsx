import { useState } from "react";
import { useForm } from "react-hook-form";
import { userLogIn } from "../../api/user";

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({username}) => {
    setLoading(true)
    const [error, user] = await userLogIn(username)
    console.log('error', error);
    console.log('object', user);
    setLoading(false)
  }

  const   [loading, setLoading] = useState(false)

  const errorDisplay = (() => {
    if (!errors.username) return null

    if (errors.username.type === 'required')
        return <span> Empty username</span>
    else if (errors.username.type === 'minLength')
        return <span> username is too short </span>

    // return <span>Username ok!</span>
  })()

  return (
    <>
      <h1>LoginForm</h1>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <fieldset>
            <label htmlFor="username"> Username </label>
            <input type="text"
            {...register("username", usernameConfig)}
            placeholder="username"/>
            { errorDisplay }
        </fieldset>
        <button type="submit" disabled={loading }>LogIn</button>
        {loading && <p>Redirecting</p>}
      </form>
    </>
  );
};

export default LoginForm;
