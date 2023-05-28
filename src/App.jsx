import './App.css'
import FormularioTarea from './components/FormularioTarea'

function App() {
  
  return (
    <section className='text-white text-center container'>
      <article className='container'>
      <h1 className='display-3'>Lista de tareas</h1>
      <hr/>
      </article>
      <FormularioTarea></FormularioTarea>
      <footer className='bg-black py-3'>
        <p className='mb-0'>&copy; Todos los derechos reservados</p>
      </footer>
    </section>  
  )
}

export default App
