import React from 'react'
import InputForm from '../Components/TranslationComp/InputForm'
import TranslationHeader from '../Components/TranslationComp/TranslationHeader'
import TranslationResult from '../Components/TranslationComp/TranslationResult'
import withAuth from '../misc/withAuth'

const Translation = () => {
  return (
    <>
      <TranslationHeader />
      <InputForm />
      <TranslationResult />
    </>
  )
}

export default withAuth(Translation)