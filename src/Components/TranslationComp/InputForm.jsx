import { useForm } from "react-hook-form"

const InputForm = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = data => {

  }
  const clickHandle = event => {
    event.preventDefault()
    console.log()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" {...register('word')}
        placeholder="english word"/>
        <button type='submit' onClick={clickHandle}>Translate</button> */}
    </form>
  )
}

export default InputForm