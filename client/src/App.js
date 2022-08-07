import './App.css';

function App() {
  const navegationBar = [
    {
      id: 1,
      title: "main"
    },
    {
      id: 2,
      title: "about"
    },
    {
      id: 3,
      title: "skills"
    },
    {
      id: 4,
      title: "projects"
    },
    {
      id: 5,
      title: "contact"
    }
  ]

  return (
    <div className="App">
      <div className='container'>
        <div className='navbar'>
        <h2 className='navTitle'> Gaby Vazquez </h2>
        <ul>
          {navegationBar.map((navegation) => (
            <li>
              <a href={`#${navegation.title}`}> {navegation.title} </a>
            </li> 
          ))}
        </ul>
        </div>
        <div className='mainPart'>
          <div className='section1'>
            <div>
              <div className='intro'>
                HEY NICE TO MEET YA, I'M GABY!<br/>
                A FULL STACK DEVELOPER
              </div>
              <p>
              Recent software engineering graduate who's passionate about 
              <span> coding, problem-solving, and staying curious</span>
              </p>
            </div>
            <div>
              <img className='contain' src="Order_gaby.png" alt="MDN Logo"/>
            </div>
          </div>
          <div className='section2'>
            <h2 className='sections-header' id='about'>
              About Me!
            </h2>
          </div>
          <div className='section3'>
            <h2 className='sections-header' id='skills'>
              Skills!
            </h2>
          </div>
          <div className='section4'>
            <h2 className='sections-header' id='projects'>
              Past Projects!
            </h2>
          </div>
          <div className='section5'>
            <h2 className='sections-header' id='contact'>
              Contact Info!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
