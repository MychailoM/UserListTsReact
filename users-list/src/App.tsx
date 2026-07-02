import { useState, type ChangeEvent } from 'react'
import UsersList from './components/UserList'
import type { User } from './types/User'
import './App.css'

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  }

  const saveUser = () => {
      if (age === undefined) return;
      if(age===null||name===""){return alert("Заповніть поля")};
    setUsers(prev => [...prev, {id: prev.length, name, age}])
    setName("")
    setAge(0)
    }

  function onUserClick (user: User){
    alert(`${user.name} (${user.age} років)`);
  }

  return (
    <>
      <input value={name} type="text" onChange={handleNameChange} placeholder='Enter your name' />
      <input value={age} type="number" onChange={handleAgeChange} placeholder='Enter your age' />
      <button type='button' onClick={saveUser}>Save</button>
      <UsersList users={users} onUserClick={onUserClick}/>
    </>
  )
}

export default App
