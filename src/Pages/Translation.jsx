import React, { useState } from 'react'
import { newTranslation } from '../api/translation'
import ImageHolder from '../Components/TranslationComp/ImageHolder'
import InputForm from '../Components/TranslationComp/InputForm'
import TranslationHeader from '../Components/TranslationComp/TranslationHeader'
import TranslationResult from '../Components/TranslationComp/TranslationResult'
import { useUser } from '../Context/UserProvider'
import withAuth from '../misc/withAuth'

// looping through word input and turning
//every letter into an image source
const wordToImage = word => {
  let imageContainer = []
  word.split("").forEach((letter,index) => 
    imageContainer.push({
      id: index+1, 
      name:`${letter}`,
      src:`signs/${letter}.png`}))
  return imageContainer
}

const Translation = () => {

  const {user} = useUser()
  const [word, setWord] = useState('')

  const handleTranslationSubmission =  async sign => {
    if (sign.length === 0){
      alert('Type a word to begin.')
      return
    }
    const [error, result] = await newTranslation(user, sign)
  }

  const handleTranslation = () => {
    return signs
  }

  const signs = wordToImage(word).map(sign => 
   <ImageHolder key={sign.id} sign={sign}/>)

  return (
    <>
      <TranslationHeader />
      <InputForm />
        <TranslationResult onSubmission={handleTranslationSubmission}
        onTranslation={handleTranslation}/>
      <div  id='ASL-word-display'>
        {signs}
      </div>
    </>
  )
}

export default withAuth(Translation)