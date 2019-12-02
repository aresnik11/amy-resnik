import React from 'react'
import books from '../assets/booked/booked_books.png'
import book_lists from '../assets/booked/booked_book_lists.png'
import homepage from '../assets/booked/booked_homepage.png'
import book from '../assets/booked/booked_book.png'
import error from '../assets/booked/booked_error.png'
import login from '../assets/booked/booked_login.png'
import messages from '../assets/booked/booked_messages.png'
import profile from '../assets/booked/booked_profile.png'
import search from '../assets/booked/booked_search.png'
import book_clubs from '../assets/booked/booked_book_clubs.png'
import Carousel from 'nuka-carousel';

const Booked = (props) => {
    return (
        <div id="booked">
            <div className="container">
                <h1>Booked</h1>
                <h3>A book app that allows users to search for books, add books to book lists, share book lists, and chat in online book clubs</h3>
                <ul className="tech">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby on Rails</li>
                    <li>ActionCable</li>
                    <li>Google Books API</li>
                    <li>React Router</li>
                    <li>Semantic UI</li>
                    <li>CSS</li>
                    <li>JWT</li>
                    <li>Postgres</li>
                    <li>ActiveModel Serializer</li>
                </ul>
                <Carousel
                    className="carousel"
                    wrapAround={true}
                    enableKeyboardControls={true}
                    dragging={true}
                    swiping={true}
                    width="65%"
                >
                    <img alt="homepage" src={homepage} />
                    <img alt="login" src={login} />
                    <img alt="profile" src={profile} />
                    <img alt="book lists" src={book_lists} />
                    <img alt="books" src={books} />
                    <img alt="search" src={search} />
                    <img alt="book" src={book} />
                    <img alt="book_clubs" src={book_clubs} />
                    <img alt="messages" src={messages} />
                    <img alt="error" src={error} />
                </Carousel>
            </div>
        </div>
    )
}

export default Booked