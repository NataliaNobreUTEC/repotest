import { MdDeleteForever } from 'react-icons/md';
import '../css/Note.css';

const Note = ({ id, text, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete'
					size='23px'
				/>
			</div>
		</div>
	);
};

export default Note;
