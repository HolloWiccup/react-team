/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useEffect, useState } from 'react'
import './App.css'
import GenderShow from './Components/GenderMain';
import { DataObject } from './Types/DataObjectType';
import { REQUEST, INITIAL } from './helper.js';
import Form from './Components/Form.js';

const App = ()=>  {
  const [inputName, setInputName] = useState<string>(INITIAL.defaultValueForString);
  const [showResult, setShowResult] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)
  const [lastSavedName, setLastSavedName] = useState<string>(localStorage.getItem('lastName') || INITIAL.defaultValueForString)
  const [genderData, setGenderData] = useState<DataObject>({
    name: INITIAL.defaultValueForString,
    gender: INITIAL.defaultValueForString,
    probability: INITIAL.defaultValueForString
  })

  useEffect(() => {
    const keptName = localStorage.getItem('lastName');
    if(keptName) {
      setGenderData(prevData => ({ ...prevData, name: keptName }));
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('lastName', genderData.name);
  }, [genderData.name])


  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
  }

  const genderDefine = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `${REQUEST.SERVER_URL}?name=${inputName}`;
    if(inputName) {
      try {
        fetch(url)
      .then(response=> response.json())
      .then(result=> 
        setGenderData(() => {
          setShowResult(true)
          setShowError(false)
          setInputName(INITIAL.defaultValueForString);
          setLastSavedName(INITIAL.defaultValueForString)
          return {
            name: result.name,
            gender: result.gender || setShowError(true),
            probability: result.probability
          }
        })
        )
      }catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <Form inputChange={inputChange} name={inputName} handleButton={genderDefine}/>
      {lastSavedName && <p>Your last name was {lastSavedName}</p>}
      {showError ? 'Incorrect name. Type the correct name' :
      <GenderShow isShown={showResult} resultName={genderData.name} gender={genderData.gender} probability={genderData.probability}/>}
    </>
  )
}

export default App
