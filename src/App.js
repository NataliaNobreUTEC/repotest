import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Example note!',
		},
	]);

	const createNote = (text) => {
		const newNote = {
			id: nanoid(),
			text: text,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('saved-notes')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'saved-notes',
			JSON.stringify(notes)
		);
	}, [notes]);

	return (
			<div className='container'>
				<Header/>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase()
					)}
					handleNoteCreate={createNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
	);
};

export default App;
