import {useDispatch, useSelector} from 'react-redux'
import {useState} from "react";

export const MainPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const dispatchData = useDispatch()

  const handleSubmit = (submit) => {
    submit.preventDefault()

    dispatchData({type: 'SUBMIT_DATA', name: name, age: age})

    setName('')
    setAge('')

    alert('Your data is already on Output Page!')
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder={'NAME'} onChange={e => setName(e.target.value)}/>
        <br/>
        <input type="text" placeholder={'AGE'} onChange={e => setAge(e.target.value)}/>
        <br/>
        <input type="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
}