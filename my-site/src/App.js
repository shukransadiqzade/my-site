import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* header section starts */}
      <header className={active ? "header-active" : ""}>
        <a href="#" className="logo"><i className="fas fa-graduation-cap"></i>logo</a>
        <nav className={menuOpen ?"navbar nav-toggle" : "navbar"}>
          <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>about</a></li>
            <li><a href="#teacher" onClick={() => setMenuOpen(false)}>teacher</a></li>
            <li><a href="#course" onClick={() => setMenuOpen(false)}>course</a></li>
            <li><a href="#review" onClick={() => setMenuOpen(false)}>review</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>contact</a></li>
          </ul>
        </nav>
            <div 
           className={menuOpen ? "fas fa-bars fa-xmark" : "fas fa-bars"} 
           onClick={() => setMenuOpen(!menuOpen)}
         ></div>
      </header>
      {/* header section ends */}

      {/* home section start */}
      <section className="home" id="home"
      style={{ background: `linear-gradient(rgba(198, 59, 250, .8), rgba(198, 59, 250, .8)), url('images/img.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
       }} >

        <div className="content">
          <h1>learn online form home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vel corrupti. Exercitationem earum hic distinctio ab cupiditate a facilis ullam.</p>
          <a href="#"><button>discover more</button></a>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <h3>trending courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt.</p>
          </div>
          <div className="box">
            <i className="fas fa-fire"></i>
            <h3>free trial</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt.</p>
          </div>
          <div className="box">
            <i className="fas fa-award"></i>
            <h3>certification</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt.</p>
          </div>
        </div>
      </section>
      {/* home section ends */}

      {/* about section starts */}
      <section className="about" id="about">
        <h1 className="heading">about us</h1>
        <h3 className="title">start your journey width us</h3>
        <div className="row">
          <div className="content">
            <h3>start your journey to a better life width our practical courses</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod perferendis inventore aspernatur temporibus corporis delectus mollitia enim aut expedita perspiciatis! Quaerat maxime neque vitae esse voluptatum. Quod commodi odio voluptatibus!</p>
            <a href="#"><button>learn more</button></a>
          </div>
          <div className="image">
            <img src={process.env.PUBLIC_URL + '/images/about.jpg'} alt="about" />
          </div>
        </div>
      </section>
      {/* about section ends */}

      {/* teacher section starts */}
      <section id="teacher" className="teacher">
        <h1 className="heading">our tracher</h1>
        <h3 className="title"> meet professional trainers </h3>
        <div className="card-container">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/img4.avif'} alt="" />
            <h3>someone's name</h3>
            <p> i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/photo1.jpg'} alt="" />
            <h3>someone's name</h3>
            <p> i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/img6.avif'} alt="" />
            <h3>someone's name</h3>
            <p> i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/photo2.jpg'} alt="" />
            <h3>someone's name</h3>
            <p> i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
        </div>
      </section>
      {/* teacher section ends */}

      {/* course section start */}
      <section id="course" className="course">
        <h1 className="heading">our courses</h1>
        <h3 className="title">upgrade your skills with newest courses</h3>
        <div className="box-container">
          <div className="box">
            <i className="fab fa-html5"></i>
            <h3>html5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
          <div className="box">
            <i className="fab fa-css3-alt"></i>
            <h3>css3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
          <div className="box">
            <i className="fab fa-js-square"></i>
            <h3>javascript</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>seo marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
          <div className="box">
            <i className="fas fa-paint-brush"></i>
            <h3>graphic design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam!</p>
          </div>
        </div>
      </section>
      {/* course section ends */}

      {/* review section starts */}
      <section id="review" className="review">
        <h1 className="heading">students review</h1>
        <h3 className="title">what our students says about us</h3>
        <div className="box-container">
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/indir1.jfif'} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/review1.jfif'} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/review2.jfif'} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
      {/* review section ends */}

      {/* contact section start */}
      <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <h3 className="title">we love conversatios, lets talk.</h3>
        <div className="row">
          <div className="image">
            <img src={process.env.PUBLIC_URL + '/images/message.webp'} alt="" />
          </div>
          <div className="form-container">
            <form action="">
              <input type="text" placeholder="full name" />
              <input type="email" placeholder="enter your email" />
              <input type="number" placeholder="phone" />
              <textarea placeholder="message" cols="30" rows="10"></textarea>
              <input type="submit" value="message" />
            </form>
          </div>
        </div>
      </section>
      {/* contact section ends */}

      {/* footer section start */}
      <section className="footer">
        <div className="icons">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-github"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>
        <div className="credit">created by <span>mr. web designer</span> | all rights reserved. </div>
      </section>
    </div>
  );
}

export default App;
