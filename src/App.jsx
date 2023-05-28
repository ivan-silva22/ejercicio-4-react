import './App.css'
import FormularioTarea from './components/FormularioTarea'

function App() {
  
  return (
    <section className='text-white container text-center my-4'>
      <h1 className='display-3'>Lista de tareas</h1>
      <hr />
      <FormularioTarea></FormularioTarea>
    </section>  
  )
}

export default App
