import './App.css'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'

function App() {
  
  return (
    <section className='text-white container text-center my-4'>
      <h1 className='display-3'>Lista de tareas</h1>
      <hr />
      <FormularioTarea></FormularioTarea>
      <ListaTareas></ListaTareas>
    </section>  
  )
}

export default App
