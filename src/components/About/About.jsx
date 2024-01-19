// Import Modules
import './About.css';
import appOverview from './assets/appOverview.png'

// Create Function to render the about page
function About() {
    return (
        <section>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold about-header">Volk Task Tracker</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">At volk, we're focused on providing you with an easy to use app to keep your life your life "on track" </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a href='https://www.apple.com/app-store/'>
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Upgrade Now</button>
                        </a>    
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                    <div className="container px-5">
                        <img src={appOverview} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Export function
export default About;