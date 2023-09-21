import React, { createContext, useState } from 'react'
import Home from './components/Home';

export const TestContext = createContext();

const App = () => {
  const [user,setUser] = useState({
    name : 'Kirti',
    gender : 'female',
    age : 24
  });


  return (
    <TestContext.Provider value={{user,setUser}}>

       <Home/>

     </TestContext.Provider>
  )
}

export default App