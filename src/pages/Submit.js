import Header from '../components/Header';
import Footer from '../components/Footer';
import './Submit.css';
import {Link} from 'react-router-dom';


const Submit = () => {
  return (
    <>
      <Header />
      <section id="submit-container">
    <div className="submit-writing">
        <h2>Submit to Troika!</h2>
        <p id="italics">Writing and/or image submissions must adhere to the following guidelines:</p>
        <ul className="list">
            <li>Undergraduate work or art concerning Slavic, East European, and Eurasian studies</li>
            <li>MLA formatting for academic papers</li>
            <li>No more than 15 pages double-spaced (longer papers may be considered but will likely be abridged)</li>
            <li><code>.doc/.docx</code> file format preferred for writing submissions</li>
            <li><code>.jpg/.png</code> formatting for images</li>
          </ul>
        <p id="italics">Send submissions to <a href="mailto:troikaberkeley@gmail.com" id="red">troikaberkeley@gmail.com</a>. 
                        Please also indicate the date when the work was completed.
        </p>
        <p id="italics">
            Share with us other related details at your discretion, <span style={{color:'#C71919'}}>i.e., whether the work was completed for a course, which course, grade level at which you completed the work, etc.</span>.
        </p>
</div>

{/*         <div className="submit-writing">
          <h2>Submit to Troika!</h2>
          <p id="italics">
            Writing and/or image submissions must adhere to the following guidelines:
          </p>
          <ul className="list">
            <li>Undergraduate work or art concerning Slavic, East European, and Eurasian studies</li>
            <li>MLA formatting for academic papers</li>
            <li>No more than 15 pages double-spaced (longer papers may be considered but will likely be abridged)</li>
            <li><code>.doc/.docx</code> file format preferred for writing submissions</li>
            <li><code>.jpg/.png</code> formatting for images</li>
          </ul>
          <p id="italics">
            Send submissions to <a href="mailto:troikaberkeley@gmail.com" id="red">troikaberkeley@gmail.com</a>.
            <br />
            Please also indicate the date when the work was completed.
            <br />
            <br />
            Share with us other related details at your discretion i.e., whether the work was completed for a course, which course, grade level at which you completed the work, etc.
          </p>
        </div> */}

        <div className="images-section">
            <div id='caption'>
                <h6>This could be you!</h6>
            </div>
            <div className="image-stack">
                <Link to="/issues">
                    <img src="cover1.png" alt="img1"/>
                    <img src="cover2.png" alt="img2"  />
                    <img src="cover3.png" alt="img3"  />
                    <img src="arrow.png" alt="img4" />
                </Link>
                

            </div>  
        </div>
      </section>

        <section className="max-w-xl mx-auto p-6 border border-black rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <input
              type="text"
              placeholder="Send us a message!"
              className="w-full p-3 border border-gray-400 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </section>

      <Footer />
    </>
  );
};

export default Submit;