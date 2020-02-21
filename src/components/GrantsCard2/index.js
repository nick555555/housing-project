import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";
import Para from "../../pictures/parimg.jpg";
import Town2 from "../../pictures/town2.jpg";
import Town3 from "../../pictures/town3.jpg";



export default class RentalCards extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col s6 m6">
                    <div className="row">
                        <div className="card red darken-4">
                            <div className="card-content white-text">
                                <span className="card-title">Rental Housing</span>
                                <p>The Rental Housing Program provides houses and apartments to eligible tribal members at low-cost, affordable rental fees. Services include access to rental homes, rental apartments, recovery house, senior apartments, and transition housing for persons completing treatment. We also provide apartment housing for seniors and have emergency housing.</p><br />
                                <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h5>Rental Program Features & Benefits:</h5>
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Low Rent Based on Household Income</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Utility Allowance Based on Household Usage</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Garbage, Water, Sewer and Lawn Service Provided</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Several ADA Homes Availible for Accessibility Needs</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Special Rents for Elders, Veterans and Disabled Households</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>



                <h5>Our Locations:</h5>
                <div className="row locationCards">
                    <div className="col s4 m4">
                        <div className="card rentalCard">
                            <div className="card-image">
                                <img className="rentalImg" src={Para} />
                                <span className="card-title">Skopabsh Village</span>
                            </div>
                            <div className="card-content">
                                <p>40 homes built in the 1970s'</p><br/>
                            </div>
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s4 m4">
                        <div className="card rentalCard">
                            <div className="card-image">
                                <img className="rentalImg" src={Town2} />
                                <span className="card-title">Cedar Village</span>
                            </div>
                            <div className="card-content">
                                <p>24 homes built in 1997</p><br/>
                            </div>
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/39220+165th+Pl+SE,+Auburn,+WA+98092/@47.2499351,-122.1199569,16.48z/data=!4m5!3m4!1s0x5490f6d181c8b877:0x986a9b386626147b!8m2!3d47.2496201!4d-122.1202608" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s4 m4">
                        <div className="card rentalCard">
                            <div className="card-image">
                                <img className="rentalImg" src={Town3} />
                                <span className="card-title">Davis Community</span>
                            </div>
                            <div className="card-content">
                                <p>48 homes built in 2006 (6 Tribal and 2 ARRA Homes)</p>
                            </div>
                            <div className="card-action">
                                <a href="#" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// }
// function GrantsCard2 () {
//     return (
//         <div className = "row">
//         <div className="col s1 m3">
//             <div class="card teal lighten-2">
//                 <div className = "card-image"> 
//              {/* <h2 className="header">Home Repair </h2> */}
//             {/* <div className="card horizontal"> */}
//                 {/* <div className="card-image"> */}
//                 <img src="https://tse2.mm.bing.net/th?id=OIP.G7N-Q8p8bpODtPOuKxrEXAHaDf&pid=Api&P=0&w=347&h=166" alt="fall" />
//                  <span class = "card-title black-text bold">Home Repair </span>
//                  {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
//                  </div>
//                     <div className="card-content">
//                         <p>I am a very simple card. I am good at containing small bits of information.</p>
//                     </div>
//                     <div className="card-action">
//                         <a href="https://drive.google.com/file/d/1KCCTyYqQdzCqjmdpA4R9yy6CaeqyDyZk/view?usp=sharing">Apply Now!</a>
//                     </div>
//                 </div>
//                 {/* </div> */}
//             </div> 
//             </div>
//     );
// }
// export default GrantsCard2;