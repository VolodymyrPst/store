import React, {Fragment} from 'react';


const BookListItem = ({book}) => {
	const {title, author} = book;
	return (
		<div className="book-list-item">
			<span>{title}</span><br/>
			<span>{author}</span>
		</div>
	)
};

export default BookListItem;