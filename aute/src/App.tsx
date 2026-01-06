import reactLogo from './assets/react.svg'
import globalLogo from '/Avocado.svg'
import Counter from './components/Counter'
import DefaultBehaviorDemo from './components/DefaultBehaviorDemo'
import FormDemo from './components/FormDemo'
import './App.css'

function App() {
  return (
    <>
      <Counter></Counter>
      <DefaultBehaviorDemo></DefaultBehaviorDemo>
      <FormDemo></FormDemo>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={globalLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
