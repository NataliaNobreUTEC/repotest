import { useState } from 'react';
import '../css/AddNote.css';

const AddNote = ({ handleNoteCreate }) => {
	const [noteText, setNoteText] = useState('');

	const handleChange = (event) => {
			setNoteText(event.target.value);	
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleNoteCreate(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='What do you want to say...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
