import React, { Component } from 'react';

export class RideRequest extends Component {
    render(){
        return(
            <div>
                {/* <!-- Ride Requests --> */}
                <div class="container mt-5">
                    <h1>Ride Requests</h1>

                    {/* <!-- Placeholder ride requests --> */}
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Request from User [Placeholder Username]</h5>
                            <p class="card-text">Message from the user: [Placeholder Message]</p>
                            <p class="card-text">Date of Request: [Placeholder Date and Time]</p>
                            <a href="#" class="btn btn-primary">Accept Request</a>
                            <a href="#" class="btn btn-danger">Reject Request</a>
                        </div>
                    </div>

                    {/* <!-- Add more ride requests as needed --> */}
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Request from User [Placeholder Username]</h5>
                            <p class="card-text">Message from the user: [Placeholder Message]</p>
                            <p class="card-text">Date of Request: [Placeholder Date and Time]</p>
                            <a href="#" class="btn btn-primary">Accept Request</a>
                            <a href="#" class="btn btn-danger">Reject Request</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Request from User [Placeholder Username]</h5>
                            <p class="card-text">Message from the user: [Placeholder Message]</p>
                            <p class="card-text">Date of Request: [Placeholder Date and Time]</p>
                            <a href="#" class="btn btn-primary">Accept Request</a>
                            <a href="#" class="btn btn-danger">Reject Request</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}