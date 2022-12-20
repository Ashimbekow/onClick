
import { useState } from 'react'
import './App.css'

function App() {
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [emailDirty, setEmailDirty] = useState(false)
 const [passwordDirty, setPasswordDirty] = useState(false)
 const [emailError, setEmailError] = useState("Пожалуйста заполните! ")
 const [passwordError, setPasswordError] = useState("Заполните!")
const [check, setCheck] = useState(false)


 const blurHandler =(e) =>{
  switch(e.target.name){
    case "email":
      setEmailDirty (true)
      break
      case "password":
        setPasswordDirty (true)
      break
  }
 }

  return (
    <div className="App">
     <form>
      <h1>Регистрация</h1>
      {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div> }
      <input onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Введите свой email...' disabled={check} />
      {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div> }
      <input onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Введите свой password' disabled={check}/>
      <input type="checkbox" value={check} onChange={() => setCheck(!check)} />
      <button  type='submit' disabled={!check}>Зарегистрироваться!</button>
     </form>
    </div>
   
  )
}

export default App
