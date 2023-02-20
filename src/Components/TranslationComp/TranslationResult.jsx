import { useForm } from "react-hook-form"
import TranslateWordButton from "./TranslateWordButton"

const TranslationResult = ({onSubmission, onTranslation}) => {

  const {register, handleSubmit} = useForm()
  const onSubmit = ({word}) => onSubmission(word)
  const onChange =({word}) => onTranslation(word)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)}>
      <input type="text" {...register('word')} 
      placeholder="english word"/>
      <button className='btn btn-success' type='submit' 
      id='submit-translation'>Submit Translation</button>
    </form>
  )
}

export default TranslationResult