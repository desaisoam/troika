import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Issues.css";

const Issues = () => {
    return (
        <main>
            <Header />
            <div className="issues-container">
                <span id="latest-issue-header">LATEST ISSUE</span>
                <div className="latest-issue">
                    <img
                        src="cover1.png"
                        alt="Latest Issue Fall 2024"
                        className="main-cover"
                    />
                    <a href="#" className="download-link">
                        Download
                    </a>
                </div>
                <hr></hr>

                <div className="issues-grid">
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_F2024.pdf', '_blank')}>
                        <img src="cover1.png" alt="Fall 2024" />
                        <span>Fall 2024</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2024.pdf', '_blank')}>
                        <img src="cover1.png" alt="Fall 2024" />
                        <span>Spring 2024</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2023.pdf', '_blank')}>
                        <img src="cover2.png" alt="Fall 2023" />
                        <span>2023</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2022.pdf', '_blank')}>
                        <img src="cover3.png" alt="Spring 2023" />
                        <span>2022</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2019.pdf', '_blank')}>
                        <img src="cover3.png" alt="Fall 2022" />
                        <span>2019</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2018.pdf', '_blank')}>
                        <img src="cover3.png" alt="Fall 2022" />
                        <span>2018</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2017.pdf', '_blank')}>
                        <img src="cover3.png" alt="Spring 2022" />
                        <span>2017</span>
                    </div>
                    <div className="issue-item" onClick={() => window.open('https://www.ocf.berkeley.edu/~troika/pdfs/TroikaMagazine_2012.pdf', '_blank')}>
                        <img src="cover3.png" alt="Spring 2022" />
                        <span>2012</span>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Issues;
