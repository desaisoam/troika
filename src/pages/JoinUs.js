import Header from '../components/Header';
import Footer from '../components/Footer'
import './JoinUs.css'


const JoinUs = () => {
    return (
    <>
    <Header/>
    <section>
        <p>
            
        </p>
        
    </section>
    <div class="container">
  <div class="join-section">
    <div class="join-text">
      <h1>JOIN TROIKA</h1>
      <p><em>At TROIKA</em>, we're always looking for fresh faces to join our journal. If you're a UC Berkeley student interested in editing or design, or just have a passion for Slavic, East European, or Eurasian cultures, this is the place for you!</p>
      <p>Interested in joining our team?<br />Fill out <a href="#">this application</a>.</p>
      <p>Interested in submitting work?<br />Look at the <a href="#">submission criteria</a>.</p>
    </div>
    <div class="carousel">
      <img src="group-photo-placeholder.jpg" alt="Group photo" />
      <p><small>iStock<br/>Credit: Alessandro Biascioli</small></p>
    </div>
  </div>

  <div class="team-section">
    <h2><em>Our Team</em></h2>
    <div class="team-grid">
      <div class="team-member">
        <div class="placeholder"></div>
        <strong>John Doe</strong><br />President
      </div>
      <div class="team-member">
        <div class="placeholder"></div>
        <strong>John Doe</strong><br />President
      </div>
      <div class="team-member">
        <div class="placeholder"></div>
        <strong>John Doe</strong><br />President
      </div>
    </div>
  </div>

  <div class="contact-section">
    <h3>Get in Touch</h3>
    <input type="text" placeholder="Send us a message!" />
    <button type="submit">Submit</button>
  </div>
</div>

    <Footer/>

    </>
);
}
  
export default JoinUs;