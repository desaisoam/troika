import Header from '../components/Header';
import Footer from '../components/Footer'
import './Home.css'


const Home = () => {
    return (
    <>
    <Header/>
    <section className ="home-content">
        <div id="about">
            <div className="issue">

            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>
                TROIKA is an undergraduate journal in Eastern European, Eurasian, and Slavic studies at the University of California, Berkeley, founded in 2011. Its publication is made possible by support from the Institute of Slavic, East European, and Eurasian Studies with funding from the U.S. Department of Education Title VI grant.
                </p>
            </div>
        </div> 
       
       <div className="news-section">
            <h2 className="news-title">News</h2>
            <div className="news-grid">
                <div className="news-item">
                    <img src="slavic.jpeg" alt="Event 1"/>
                    <h3>Event 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.
                    </p>
            </div>

            <div className="news-item">
                <img src="slavic.jpeg" alt="Event 2"/>
                <h3>Event 2</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.
                </p>
            </div>

            <div className="news-item">
                <img src="slavic.jpeg" alt="Event 3"/>
                <h3>Event 3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.
                </p>
            </div>

            <div className="news-item">
                <img src="slavic.jpeg" alt="Event 4"/>
                <h3>Event 4</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.
                </p>
            </div>
        </div>
    </div>
    </section>
    <Footer/>

    </>
);
}
  
export default Home;