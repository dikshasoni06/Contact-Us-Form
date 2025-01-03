import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/ContactHeader/Contact'
import ContactForm from './components/Form/ContactForm'
function App() {
  return (
    <div>
      <Navbar />

      <main className='main_container'>
        <Contact />
        <ContactForm />
      </main>

    </div>
  )
}

export default App
