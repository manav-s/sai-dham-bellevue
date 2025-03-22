import React from 'react'

const Festivals = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="section-map">
                    <div className="gmap" data-lat="47.8043227" data-lng="-122.1817917" data-center-lat="47.8043227">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.775593256451!2d-122.16095142306365!3d47.62658368659658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906cffd9762f47%3A0xcc39fb11d29d5e95!2sShirdi%20Sai%20Baba%20Temple!5e1!3m2!1sen!2sus!4v1742671373427!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="no-gutters row">
                <div className="col-md-4 d-flex">
                    <div className="contact-info-entity bg-theme-light">
                        <div className="entity-icon"><i className="fas fa-mobile"></i></div>
                        <div className="entity-value"><a color='fff' href="tel:425-483-7115">(425) 394-9173</a></div>
                        <h4 className="entity-title">phone</h4>
                    </div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="contact-info-entity bg-theme-dark">
                        <div className="entity-icon"><i className="fas fa-map-marker-alt"></i></div>
                        <div className="entity-value"><a color='fff' target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/MqVQnAFmqvyed9Th8">1805 136th Pl NE #101, Bellevue, WA 98005</a></div>                        <h4 className="entity-title">address</h4></div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="contact-info-entity bg-theme">
                        <div className="entity-icon"><i className="fas fa-envelope"></i></div>
                        <div className="entity-value"><a color='fff' href="mailto:shirdisaidham@outlook.com">shirdisaidham@outlook.com</a></div>
                        <h4 className="entity-title">email</h4>
                    </div>
                </div>
            </div>
    </div>
        </div>
        
    )
}

export default Festivals
