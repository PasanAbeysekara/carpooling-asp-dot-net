import React, { Component } from 'react';

export class ViewListings extends Component {
    render(){
        return(
            <div>
                {/* <!-- View Listings --> */}
                <div class="container mt-5">
                    <h1>My Listings</h1>

                    {/* <!-- Placeholder carpool listings --> */}
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Carpool Listing 1</h5>
                            <p class="card-text">Description of the carpool listing. Date and Time: [Placeholder Date and Time]</p>
                            <p class="card-text">Departure Location: [Placeholder Departure Location]</p>
                            <p class="card-text">Destination Location: [Placeholder Destination Location]</p>
                            <p class="card-text">Price per Seat: [Placeholder Price]</p>
                            <p class="card-text">Available Seats: [Placeholder Seats]</p>
                            <a href="#" class="btn btn-primary">Edit Listing</a>
                            <a href="#" class="btn btn-danger">Delete Listing</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Carpool Listing 1</h5>
                            <p class="card-text">Description of the carpool listing. Date and Time: [Placeholder Date and Time]</p>
                            <p class="card-text">Departure Location: [Placeholder Departure Location]</p>
                            <p class="card-text">Destination Location: [Placeholder Destination Location]</p>
                            <p class="card-text">Price per Seat: [Placeholder Price]</p>
                            <p class="card-text">Available Seats: [Placeholder Seats]</p>
                            <a href="#" class="btn btn-primary">Edit Listing</a>
                            <a href="#" class="btn btn-danger">Delete Listing</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Carpool Listing 1</h5>
                            <p class="card-text">Description of the carpool listing. Date and Time: [Placeholder Date and Time]</p>
                            <p class="card-text">Departure Location: [Placeholder Departure Location]</p>
                            <p class="card-text">Destination Location: [Placeholder Destination Location]</p>
                            <p class="card-text">Price per Seat: [Placeholder Price]</p>
                            <p class="card-text">Available Seats: [Placeholder Seats]</p>
                            <a href="#" class="btn btn-primary">Edit Listing</a>
                            <a href="#" class="btn btn-danger">Delete Listing</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Carpool Listing 1</h5>
                            <p class="card-text">Description of the carpool listing. Date and Time: [Placeholder Date and Time]</p>
                            <p class="card-text">Departure Location: [Placeholder Departure Location]</p>
                            <p class="card-text">Destination Location: [Placeholder Destination Location]</p>
                            <p class="card-text">Price per Seat: [Placeholder Price]</p>
                            <p class="card-text">Available Seats: [Placeholder Seats]</p>
                            <a href="#" class="btn btn-primary">Edit Listing</a>
                            <a href="#" class="btn btn-danger">Delete Listing</a>
                        </div>
                    </div>
                    {/* <!-- Add more carpool listings as needed --> */}

                </div>
            </div>
        );
    }
}