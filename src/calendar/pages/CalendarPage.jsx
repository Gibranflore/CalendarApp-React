
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarBox, CalendarModal, NavBar} from '../';
import { localizer, getMessagesES } from '../../helpers';
import { addHours  } from 'date-fns'
import { useState } from 'react';

import './style.css';

const events = [{
  title: 'Fecha de cumpleaños',
  notes: 'Debemos comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ),
    user: {
      _id: '123',
      name: 'Gibran Flores'
    }

}]

export const CalendarPage = () => {

  const [LastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({ DoubleClick: event});
    
  }

    const onSelect = (event) => {
    console.log({ Click: event});
    
  }

    const onViewChanged = (event) => {
      localStorage.setItem('lastView', event)
      setLastView(event)
  }

  return (
    <>
      <NavBar/>
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ LastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarBox
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal/>
    </>
  )
}