/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useState } from 'react'
import './App.css'
import Button from './Components/Button';
import TextInput from './Components/TextInput';
import GenderShow from './Components/GenderMain';
import { DataObject } from './Types/DataObjectType';
import { REQUEST, INITIAL } from './helper.js';

const App = ()=>  {
  const [inputName, setInputName] = useState<string>(INITIAL.defaultValueForString);
  const [showResult, setShowResult] = useState<boolean>(false)
  const [genderData, setGenderData] = useState<DataObject>({
    name: INITIAL.defaultValueForString,
    gender: INITIAL.defaultValueForString,
    probability: INITIAL.defaultValueForString
  })

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
  }

  const genderDefine = () => {
    const url = `${REQUEST.SERVER_URL}?name=${inputName}`;
      try {
        fetch(url)
      .then(response=> response.json())
      .then(result=> 
        setGenderData(prevState=> {
          setShowResult(true)
          return {
            ...prevState,
            name: result.name,
            gender: result.gender,
            probability: result.probability
          }
        })
        )
      }catch (err) {
        console.log(err)
      }
  }

  return (
    <>
      <TextInput inputChange={inputChange} name={inputName}/>
      <Button handleButton={genderDefine}/>
      <GenderShow isShown={showResult} resultName={genderData.name} gender={genderData.gender} probability={genderData.probability}/>
    </>
  )
}

export default App
