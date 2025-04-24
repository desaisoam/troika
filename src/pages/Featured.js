import Header from '../components/Header';
import Footer from '../components/Footer'
import './Featured.css'


const Featured = () => {
    return (
    <>
    <Header/>
    <section>
        <h1>
            featured.
        </h1>
        <hr style={{width: '90%', height: '2px', backgroundColor: 'black'}}/>
        <h2>
            KLASSIKI
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginLeft: '200px', marginRight: '50px', marginBottom: '50px'}}>
            <img 
                src="KLASSIKI.png" 
                style={{ width: '300px', height: 'auto'}}
            />
            <p>
                The horse. The Troika horse. Is troika the horse. Is the horse Troika. This is a test. I want to see how the text looks. OK, bye! hi text text text text text
            </p>
        </div>
        <hr style={{width: '90%', height: '2px', backgroundColor: 'black'}}/>
        <h2>
            New Featured
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginLeft: '200px', marginRight: '50px'}}>
            <img 
                src='KLASSIKI.png'
                style={{ width: '300px', height: 'auto'}}
            />
            <p>
                Description
            </p>
        </div>
        <hr style={{width: '90%', height: '2px', backgroundColor: 'black'}}/>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '200px', marginRight: '200px', backgroundColor: 'blue'}}>
            <img 
                src='KLASSIKI.png'
                style={{ width: '200px', height: 'auto', marginRight: '20px'}}
            />
            <img 
                src='KLASSIKI.png'
                style={{ width: '200px', height: 'auto', marginRight: '20px'}}
            />
            <img 
                src='KLASSIKI.png'
                style={{ width: '200px', height: 'auto'}}
            />
        </div>
    </section>
    <Footer/>

    </>
);
}
  
export default Featured;