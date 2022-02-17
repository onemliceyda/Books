import React from 'react';
import Book from './Book';
import './BookList.css'
class BookList extends React.Component {
    render() {
        //console.log(this.props.books);

        const booklist = this.props.books.map((book, i) => {
            return <Book book={book}
                key={i}
            />
        })
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {booklist}
                    </div>
                </div>
            </section>
        )
    }
}
export default BookList;


