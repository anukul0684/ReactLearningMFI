import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="card-container">
                    <header>
                        <span initials="AK"></span>
                        <h2>Anu Kulshrestha</h2>
                    </header>
                    <main>
                        <ul>
                            <li><span>Birthday: </span>Feb 06, 1984</li>
                            <li><span>Address: </span>2945 Pembina Highway</li>
                            <li><span>Phone No.: </span>204-599-8236</li>
                        </ul>
                    </main>
                </section>
            </React.Fragment>
        );
    }
}


export default Card;