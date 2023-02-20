import { useForm } from "react-hook-form"

const TranslationResult = ({onSubmission, onTranslation}) => {

  const {register, handleSubmit} = useForm()
  const onSubmit = ({word}) => onSubmission(word)
  const onChange = ({word}) => onTranslation(word)


  
  return (
    <form className="input-group"
      id='translation-form'
      onChange={handleSubmit(onChange)}
      onSubmit={handleSubmit(onSubmit)}
      >
      <input type="text" 
        maxLength="40"
        className="form-control"
        {...register('word',{pattern: /[A-Za-z]/})}
        placeholder="english word"/>
      <button className='btn btn-lg btn-success' type='submit' 
      id='submit-translation'>Submit Translation</button>
    </form>
  )
}

export default TranslationResult