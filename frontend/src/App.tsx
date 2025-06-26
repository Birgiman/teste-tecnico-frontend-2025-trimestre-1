import { ToastContainer } from 'react-toastify'
import 'tailwindcss'
import { ThemeToggleButton } from './components/Theme/ThemeToggleButton'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <ThemeToggleButton />
      <Home />
      <ToastContainer />
    </>
  )
}

export default App
