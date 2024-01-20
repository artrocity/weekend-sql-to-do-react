// Import Modules
import './About.css';
import appOverview from './assets/appOverview.png'

// Create Function to render the about page
function About() {
    return (
        <>

        {/* About with upgrade option */}
        <section className="about-section">
            <div className="px-4 pt-5 my-5 text-center border-bottom container">
                <h1 className="display-4 fw-bold about-header section-title">Volk Task Tracker</h1>
                <div className="col-lg-6 mx-auto">
                <p className="section-description">At Volk, we understand the importance of staying organized in a fast-paced world. That's why we've developed the Volk Task Tracker – a user-friendly and efficient app designed to help you manage your daily tasks with ease. Our app offers a range of features to keep your life "on track," including:</p>
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

        {/* Pricing Option */}
        <section>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col">
                <div class="pricing-card mb-4 rounded-3 shadow-sm">
                    <div class="pricing-card-container py-3">
                    <h4 class="my-0 fw-normal">Free</h4>
                    </div>
                    <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>Up to 100 Tasks Per Month</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <a href="https://www.apple.com/app-store/">
                        <button type="button" class="w-100 btn btn-lg btn-primary">Sign Up</button>
                    </a>
                    </div>
                </div>
                </div>

                <div class="col">
                <div class="pricing-card mb-4 rounded-3 shadow-sm">
                    <div class="pricing-card-container py-3">
                    <h4 class="my-0 fw-normal">Pro</h4>
                    </div>
                    <div class="card-body">
                    <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>Up to 200 Tasks Per Month</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                    </ul>
                    <a href="https://www.apple.com/app-store/">
                        <button type="button" class="w-100 btn btn-lg btn-primary">Purchase</button>
                    </a>
                    </div>
                </div>
                </div>

                <div class="col">
                <div class="pricing-card mb-4 rounded-3 shadow-sm border-primary">
                    <div class="pricing-card-container py-3">
                    <h4 class="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div class="card-body">
                    <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>Unlimited Tasks</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <a href="https://www.apple.com/app-store/">
                        <button type="button" class="w-100 btn btn-lg btn-primary">Purchase</button>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
    )
}

// Export function
export default About;