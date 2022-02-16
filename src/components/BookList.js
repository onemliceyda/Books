import React from 'react';
import Book from './Book';
class BookList extends React.Component {
    render() {
        //console.log(this.props.books);

        const booklist = this.props.books.map((book, i ) => {
            return <Book book={book}  
                key={i}
            />
        })
        return <div>{booklist}</div>
    }
}
export default BookList;