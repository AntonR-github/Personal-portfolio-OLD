import React from 'react'
import '../src/App.scss'
import { About, Footer, Header, Skills, Work } from './container'
import { Navbar } from '../src/components'

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
