import React, { Component } from 'react';

export class RequestASeat extends Component {
    render(){
        return(
            <div>
               {/* <!-- Request a Seat --> */}
                <div class="container mt-5">
                    <h1>Request a Seat</h1>

                    {/* <!-- Placeholder carpool listing information --> */}
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Carpool Listing Details</h5>
                            <p class="card-text">Driver: [Placeholder Driver Name]</p>
                            <p class="card-text">Departure Location: [Placeholder Departure Location]</p>
                            <p class="card-text">Departure Date and Time: [Placeholder Date and Time]</p>
                            <p class="card-text">Destination Location: [Placeholder Destination Location]</p>
                            <p class="card-text">Estimated Arrival Time: [Placeholder Estimated Arrival Time]</p>
                            <p class="card-text">Price per Seat: [Placeholder Price]</p>
                            <p class="card-text">Available Seats: [Placeholder Seats Available]</p>
                        </div>
                    </div>

                    {/* <!-- Request Form (Placeholder Values) --> */}
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="name" placeholder="[Placeholder Your Name]"/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Your Email</label>
                            <input type="email" class="form-control" id="email" placeholder="[Placeholder Your Email]"/>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message to the Driver (Optional)</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="[Placeholder Message]"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Request</button>
                    </form>
                </div> 
            </div>
        );
    }
}