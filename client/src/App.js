import './App.css';

function App() {
  const navegationBar = [

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
              <p className='introAbout'>
              Recent software engineering graduate who's passionate about 
              <span> coding, problem-solving, and staying curious</span>
              </p>
            </div>
            <div>
              <img className='self' src="Order_gaby.png" alt="MDN Logo"/>
            </div>
          </div>


          <div className='section2'>
            <h2 className='sectionsHeader'>
              About Me! 
            </h2>
            <p className='aboutMePar'>
              You might be asking yourself, "Well who exactly is this Gaby chick?"
              Well allow me to introduce myself. <br/> I'm currently based in Las Vegas, Nevada
              and a recent graduate of the software development course at 
              Coding Dojo as of August 12th, 2022. Although I am just starting to break into tech,
              I offer many things such as knowledge in full stack application in different  
              languages and knowledge in algorithms. Not only am I passionate about this career 
              field but I am both determined and disciplined.<br/> Above all else, 
              I always offer my best and make an effort to keep growing my knowledge.
            </p>

            <p className='aboutMePar'> Among those things I'm also... </p>
            <div className='allPictures'>
              <div className='galarySection'> 
                <img className='picture1' src="IMG_1772.JPG" alt="Cat mama Gaby"/>
                <p className='pictureDescription'> a cat mama </p>
              </div>
              <div className='galarySection'> 
                <img className='picture2' src="IMG_0229.JPEG" alt="Lotteria master Gaby"/>
                <p className='pictureDescription'> a loteria MASTER </p>
              </div>
              <div className='galarySection'> 
                <img className='picture3' src="IMG_5075.JPEG" alt="Gaby with cotton candy"/>
                <p className='pictureDescription'> a cotton candy and all things sweet lover </p>
              </div>
              <div className='galarySection'> 
                <img className='picture4' src="IMG_3127.JPG" alt="Childish Gaby"/>
                <p className='pictureDescription'> a child at heart </p>
              </div>
            </div>
          </div>


          <div className='section3'>
            <h2 className='sectionsHeader2' id='skills'>
              Skills!
            </h2>

            <div className='iconsGroup'>
              <div className='iconSection'>
                <img src='icons8-html-5-50.png' alt='react symbol' className='icon' />
                <p>HTML</p>
              </div>
              <div className='iconSection'>
                <img src='icons8-css3-50.png' alt='react symbol' className='icon' />
                <p>CSS</p>
              </div>
              <div className='iconSection'>
                <img src='icons8-javascript-50.png' alt='react symbol' className='icon' />
                <p>JavaScript</p>
              </div>
              <div className='iconSection'>
                <img src='icons8-json-50.png' alt='react symbol' className='icon' />
                <p>JSON</p>
              </div>
            </div>
            
            <div className='iconsGroup'>
              <div className='iconSection'>
                  <img src='icons8-react-50.png' alt='react symbol' className='icon' />                  <p>React</p>
              </div>
              <div className='iconSection'>
                <img src='icons8-nodejs-50.png' alt='react symbol' className='icon' />
                <p>Node.js</p>
              </div>

              <div className='iconSection'>
                <img src='icons8-mysql-logo-50.png' alt='react symbol' className='icon' />
                <p>MySQL</p>
              </div>
              <div className='iconSection'>
                <img src='icons8-python-50.png' alt='react symbol' className='icon' />
                <p>Python</p>
              </div>
            </div>
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
