import React, { Component } from 'react';

export class UserDashboard extends Component {
    render(){
        return(
            <div>
                {/* <!-- User Dashboard --> */}
                <div class="container mt-5">
                    <h1>Welcome to Your Dashboard, [Placeholder Username]</h1>
                    
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">Profile Information</h5>
                                    {/* <!-- Placeholder user information --> */}
                                    <p>Name: [Placeholder Name]</p>
                                    <p>Email: [Placeholder Email]</p>
                                    <p>Contact Number: [Placeholder Contact Number]</p>
                                    <a href="/edit-profile" class="btn btn-primary">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">My Listings</h5>
                                    {/* <!-- Placeholder user listings --> */}
                                    <p>You have [Placeholder Listing Count] active listings.</p>
                                    <a href="/view-listings" class="btn btn-primary">View Listings</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">Ride Requests</h5>
                                    {/* <!-- Placeholder user ride requests --> */}
                                    <p>You have [Placeholder Request Count] pending ride requests.</p>
                                    <a href="/ride-request" class="btn btn-primary">View Requests</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h3>Account Settings</h3>
                            {/* <!-- Placeholder account settings options --> */}
                            <ul>
                                <li><a href="#">Change Password</a></li>
                                <li><a href="#">Notification Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}