import React, { useState } from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Myworks from './components/myworks/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Career from './components/career/career';
const App = () => {
  const [currentForm, setCurrentForm] = useState('div');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
      <Topbar
        onFormSwitch={toggleForm}
      />

      {
        currentForm === "div" ?
          <>
            <Header onFormSwitch={toggleForm}
              setActiveNav={currentForm} />
            <Intro  onFormSwitch={toggleForm}
              setActiveNav={currentForm} />
            <Experience />
            <Portfolio
              onFormSwitch={toggleForm}
              setActiveNav={currentForm}
            />
            <Testimonials />
            <Career />
          </>
          : ((currentForm === "contact") ?
            <>
              <Contact />

            </>
            : <>
              <Myworks />

            </>
          )


      }

      <Footer
        onFormSwitch={toggleForm} />
    </>
  )
}

export default App
