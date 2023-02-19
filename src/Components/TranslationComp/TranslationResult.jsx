import { useForm } from "react-hook-form"

const TranslationResult = ({onSubmission, onTranslation}) => {

  const {register, handleSubmit} = useForm()
  const onSubmit = ({word}) => onSubmission(word)
  const onChange =({word}) => onTranslation(word)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)}>
      <input type="text" {...register('word')} 
      placeholder="english word"/>
      <button type='submit' id='submit-translation'>Submit Translation</button>
    </form>
  )
}

export default TranslationResult