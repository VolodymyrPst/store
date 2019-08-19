import React, {Fragment} from 'react';


const BookListItem = ({book}) => {
	const {title, autor} = book;
	return (
		<Fragment>
			<span>{title}</span><br/>
			<span>{autor}</span>
		</Fragment>
	)
};

export default BookListItem;