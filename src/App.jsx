import Container from 'react-bootstrap/Container'

import Body from './components/Body'
import Header from './components/Header'
import { Posts } from './components/Posts'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'
import Users from './components/Users'
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'


// import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){

  return (
    <Container fluid data-bs-theme= 'light' className= 'app'>
      <Header  />
      <FormPage>
        <Login />
      </FormPage>
      {/* <FormPage>
        <Register />

      </FormPage> */}
{/*    
      <Whiteboard /> */}
   
      </Container>
  )
}

// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


