import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Forms from './components/Forms'
import Links from './components/Links'
import LinksPages from './components/Links'
// import { useFonts } from 'react-native-google-fonts';

function App() {
  const [count, setCount] = useState(0)
  // const [loaded] = useFonts({
  //   Dosis: require('react-native-google-fonts/Dosis'),
  // });

  return (
    <>
    <Header/>
    <div class="container">
        <List titulo='Anotações de FullStack'/>
        <Forms/>
      <LinksPages/>
      </div>
      <Footer/>
    </>
  )
}
export default App;