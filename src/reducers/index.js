
const initialState = {
	books: [
			{id: 1, title: 'Prodaction-Ready', autor: 'Susan J.'},
			{id: 2, title: 'Prodaction', autor: 'Susan K.'},
			{id: 3, title: 'Ready', autor: 'Susan S.'}
		]
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'BOOKS_LOADED':
			return {
				books: action.payload
			};
		default :
			return state;
	}
};

export default reducer;