import './App.css'
import Bevezeto from './components/bevezeto'
import Focim from './components/focim'
import List from './components/list'
import { allatok } from './data/allatok'
import { elohely } from './data/elohely'
import { taplalkozas } from './data/taplalkozas'

function App() {
  return (
    <>
      <Focim/>
      <Bevezeto/>
      <div className="row mb-2">
        <List cim={elohely.cim} adat={elohely.adat}/>
        <List cim={allatok.cim} adat={allatok.adat}/>
        <List cim={taplalkozas.cim} adat={taplalkozas.adat}/>
      </div>
    </>
  )
}

export default App
