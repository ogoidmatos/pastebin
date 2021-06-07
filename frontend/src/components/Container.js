import { useState } from 'react';

import Note from './Note';

const Container = () => {
    const [notes, setNotes] = useState([{id:1,title:'Test Item 1', lastUpdated:'Today'},
    {id:2,title:'Test Item 2', lastUpdated:'Yesterday'},
    {id:3,title:'Test Item 3', lastUpdated:'Tomorrow'}])

    return (
        <div className="container">
            {notes.map((n) => (<Note key={n.id} id={n.id} title={n.title} lastUpdated={n.lastUpdated}/> ))}
        </div>
    )
}

export default Container
