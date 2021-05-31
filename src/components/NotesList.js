import Note from './Note';
import AddNote from './AddNote';
import '../css/NotesList.css';

const NotesList = ({
	notes,
	handleNoteCreate,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleNoteCreate={handleNoteCreate} />
		</div>
	);
};

export default NotesList;
