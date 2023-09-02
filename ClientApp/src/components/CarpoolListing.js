import React, { Component } from 'react';

export class CarpoolListing extends Component {
    render(){
        return (
            <div class="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Carpool Listing Details</h1>
                        <h2 class="card-subtitle mb-2 text-muted">Driver: John Doe</h2>
                        
                        <h4>Departure Details:</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Departure Location: <span class="fw-bold">Placeholder Location</span></li>
                            <li class="list-group-item">Departure Date and Time: <span class="fw-bold">Placeholder Date and Time</span></li>
                        </ul>

                        <h4>Destination Details:</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Destination Location: <span class="fw-bold">Placeholder Location</span></li>
                            <li class="list-group-item">Estimated Arrival Time: <span class="fw-bold">Placeholder Time</span></li>
                        </ul>

                        <h4>Additional Information:</h4>
                        <p class="card-text">Placeholder description of the carpool listing. You can add more details and any specific requirements here.</p>

                        <h4>Pricing:</h4>
                        <p class="card-text">Price per seat: <span class="fw-bold">$Placeholder Price</span></p>

                        <h4>Available Seats:</h4>
                        <p class="card-text">Number of available seats: <span class="fw-bold">Placeholder Seats</span></p>

                        <a href="/request-a-seat" class="btn btn-primary">Request a Seat</a>
                    </div>
                </div>
            </div>

        );
    }
}
