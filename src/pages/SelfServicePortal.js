import React, { useState } from 'react'
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

function SelfServicePortal({onLogin}) {
  const [selectForm, setSelectForm] = useState(true);
  return (
    <>
    <Navbar />
    {/* <Login onLogin={onLogin}/> */}
    {selectForm ? <Login onSelectForm={setSelectForm} onLogin={onLogin} /> : <Signup onSelectForm={setSelectForm} onLogin={onLogin} />}
    </>
  )
}

export default SelfServicePortal