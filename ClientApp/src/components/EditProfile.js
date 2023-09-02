import React, { Component } from 'react';

export class EditProfile extends Component {
    render(){
        return(
            <div>
                {/* <!-- Edit Profile --> */}
                <div class="container mt-5">
                    <h1>Edit Profile</h1>

                    {/* <!-- Edit Profile Form (Placeholder Values) --> */}
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="[Placeholder Name]"/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="[Placeholder Email]"/>
                        </div>
                        <div class="mb-3">
                            <label for="contact" class="form-label">Contact Number</label>
                            <input type="tel" class="form-control" id="contact" placeholder="[Placeholder Contact Number]"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        );
    }
}