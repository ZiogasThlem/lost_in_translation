import React, { useState } from 'react'
import { newTranslation } from '../api/translation'
import ImageHolder from '../Components/TranslationComp/ImageHolder'
import TranslationHeader from '../Components/TranslationComp/TranslationHeader'
import TranslationResult from '../Components/TranslationComp/TranslationResult'
import { useUser } from '../Context/UserProvider'
import { storageSave } from '../misc/storage'
import { STORAGE_USER_KEY } from '../misc/storage'
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

  const {user, setUser} = useUser()
  const [word, setWord] = useState('')

  // displaying the word as ASL
  const signs = wordToImage(word).map(sign => 
   <ImageHolder key={sign.id} sign={sign}/>)
   
   // change every letter typed into its respective image
   const handleTranslation = (letter) => {
     setWord(letter)
     return <img src={wordToImage(letter).
       find(element => element.name===letter)}/>
   }

   
  const handleTranslationSubmission =  async sign => {
    if (sign.length === 0){
      alert('Type a word to begin.')
      return
    }
    const [error, updatedUser] = await newTranslation(user, sign)
    if (error != null) return

    storageSave(STORAGE_USER_KEY, updatedUser)
    setUser(updatedUser)

  }



  return (
    <>
      <TranslationHeader />
      <TranslationResult onSubmission={handleTranslationSubmission}
        onTranslation={handleTranslation}/> 
      <div  id='ASL-word-display'>
        {signs}
      </div>
    </>
  )
}

export default withAuth(Translation)