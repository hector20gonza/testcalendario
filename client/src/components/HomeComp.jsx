import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer ,Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const HomeComp = () => {
  const [events, setEvents] = useState([]);

  
  useEffect(() => {
    
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    fetch('http://localhost:3001/notes/allnotes')
      .then(response => response.json())
      .then(data=> {
        const backendNotes = data.map(({ id, start, end, text }) => ({
            id,
            start,
            end,
            title: text 
          }));
        
        const combinedNotes = [...savedNotes, ...backendNotes];

        
        const uniqueNotes = Array.from(new Set(combinedNotes.map(a => a.id)))
                                 .map(id => combinedNotes.find(a => a.id === id));

       
        setEvents(uniqueNotes);
        localStorage.setItem('notes', JSON.stringify(uniqueNotes));
      })
      .catch(error => {
        console.error("Error al traer notas desde el backend:", error);
        
        setEvents(savedNotes);
      });
  }, []);

  
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('notes', JSON.stringify(events));
    }
  }, [events]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('NUEVA NOTA');
    if (title) {
      const newEvent = { start, end, title };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);

    
      fetch('http://localhost:3001/notes/registernotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });
    }
  };


  const handleEventClick = (event) => {
    const action = window.confirm("¿DESEAS EDITAR LA NOTA?");
    if (action) {
        const newTitle = window.prompt("INTRODUCE LA NUEVA NOTA:", event.title);
        if (newTitle && newTitle.trim()) {  
            const updatedEvents = events.map(e =>
                e.id === event.id ? { ...e, title: newTitle } : e
            );
            setEvents(updatedEvents);
            localStorage.setItem('notes', JSON.stringify(updatedEvents));

           
            fetch(`http://localhost:3001/notes/update/${event.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...event, title: newTitle })
            }).catch(error => console.error("Error al actualizar la nota:", error));
        }
    } else {
        const deleteConfirm = window.confirm("¿QUIZAS QUIERAS ELIMINAR LA NOTA?");
        if (deleteConfirm) {
            const updatedEvents = events.filter(e => e.id !== event.id);  
            setEvents(updatedEvents);
            localStorage.setItem('notes', JSON.stringify(updatedEvents));

           
            fetch(`http://localhost:3001/notes/${event.id}`, {  
                method: 'DELETE'
            }).catch(error => console.error("Error al eliminar la nota:", error));
        }
    }
};
 
  return (
    <div>
        <h1>TEST CALENDARIO</h1>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 800, width: 600,margin: '0 auto' }}
      selectable
      onSelectSlot={handleSelect}
      onSelectEvent={handleEventClick}
      views={['month']} 
      defaultView={Views.MONTH} 
    />
    </div>
  );
};

export default HomeComp;

