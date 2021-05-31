import React from 'react';
import '../css/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<h2 className='welcome'>Welcome to your Notes!</h2>
			<div className='header-buttons'>
				<button>Notes</button>
				<button>Trash</button>
				<button>Delete Trash</button>
			</div>
		</div>
	);
};

export default Header;
