import './App.css';
import { useEffect } from 'react';
import photo1 from './images/photo1.jpg'; // photo.jpg idi -> photo1.jpg olub
import review1 from './images/review1.jfif'; // indir.jfif idi -> review1.jfif olub
import review2 from './images/review2.jfif'; // images1.jfif idi -> review2.jfif olub
import review3 from './images/review3.jfif'; // indir2.jfif idi -> review3.jfif olub

// Digər importlar (əgər adları dəyişməyibsə eyni qalsın)
import aboutImg from './images/about.jpg';
import img4 from './images/img4.avif';
import img6 from './images/img6.avif';
import photo2 from './images/photo2.jpg';
import messageImg from './images/message.webp';

function App() {
    useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar ul li a');

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header .navbar ul li a[href*=' + id + ']').classList.add('active');
          });
        }
      });
    };
  }, []);

  return (
    <div className="App">
      {/* header section starts */}
      <header>
        <a href="#" className="logo"><i className="fas fa-graduation-cap"></i>logo</a>
        <nav className="navbar">
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#teacher">teacher</a></li>
            <li><a href="#course">course</a></li>
            <li><a href="#review">review</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <div className="fas fa-bars"></div>
      </header>

      {/* home section start */}
      <section className="home" id="home">
        <div className="content">
          <h1>learn online from home</h1>
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

      {/* about section starts */}
      <section className="about" id="about">
        <h1 className="heading">about us</h1>
        <h3 className="title">start your journey with us</h3>
        <div className="row">
          <div className="content">
            <h3>start your journey to a better life with our practical courses</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod perferendis inventore aspernatur temporibus corporis delectus mollitia enim aut expedita perspiciatis!</p>
            <a href="#"><button>learn more</button></a>
          </div>
          <div className="image">
         <img src={aboutImg} alt="about us" />
          </div>
        </div>
      </section>

         {/* teacher section starts */}
      <section id="teacher" className="teacher">
        <h1 className="heading">our teacher</h1>
        <h3 className="title">meet professional trainers</h3>
        <div className="card-container">
          <div className="card">
          <img src={img4} alt="" />
            <h3>someone's name</h3>
            <p>i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
          <img src={photo1} alt="" />
            <h3>someone's name</h3>
            <p>i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
           <img src={img6} alt="" />
            <h3>someone's name</h3>
            <p>i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
          <div className="card">
          <img src={photo2} alt="" />
            <h3>someone's name</h3>
            <p>i love teaching</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
            </div>
          </div>
        </div>
      </section>

      {/* course section starts */}
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

      {/* review section starts */}
      <section id="review" className="review">
        <h1 className="heading">students review</h1>
        <h3 className="title">what our students says about us</h3>
        <div className="box-container">
          <div className="box">
             <img src={review1} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src={review2} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
           <img src={review3} alt="" />
            <h3>someone's name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      {/* contact section start*/}
      <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <h3 className="title">we love conversations, lets talk.</h3>
        <div className="row">
          <div className="image">
          <img src={messageImg} alt="message" />
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
