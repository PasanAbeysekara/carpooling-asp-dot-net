import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>

        {/* Hero Section  */}
        <div class="container mt-5">
            <div class="container-fluid bg-light p-5">
                <h1 class="display-4">Find Your Carpool</h1>
                <p class="lead">Join our carpooling community and start sharing rides today.</p>
                <hr class="my-4"/>
                <p>Search for rides or offer a ride to others. It's easy and eco-friendly!</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
            </div>
        </div>

        {/* Search Section */}
        <div class="container mb-5">
          <div class="row">
              <div class="col-md-6">
                  <h2>Search for Rides</h2>
                  <form>
                      <div class="form-group">
                          <label for="location">Location</label>
                          <input type="text" class="form-control" id="location" placeholder="Enter your destination"/>
                      </div>
                      <div class="form-group">
                          <label for="date">Date</label>
                          <input type="date" class="form-control" id="date"/>
                      </div>
                      <button type="submit" class="btn btn-primary">Search</button>
                  </form>
              </div>

              <div class="col-md-6 mb-5 ">
                <h2>Featured Listings</h2>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Carpool Listing 1</h5>
                      <p class="card-text">Description of the carpool listing.</p>
                      <a href="/carpoollisting-sample" class="btn btn-primary">View Details</a>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <div class="card-body">
                      <h5 class="card-title">Carpool Listing 2</h5>
                      <p class="card-text">Description of another carpool listing.</p>
                      <a href="/carpoollisting-sample" class="btn btn-primary">View Details</a>
                    </div>
                  </div>

                  
              </div>  
        
              
          </div>
        </div>


      </div>
    );
  }
}
