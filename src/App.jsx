import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import { Posts } from './components/Posts'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

// import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){

  return (
    <Container fluid data-bs-theme= 'light' className= 'app'>
      <Header  />
      <Container>
        <Stack direction= 'horizontal'>
          <Sidebar />
        <Posts></Posts>

        </Stack>
      
        </Container>
    
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


