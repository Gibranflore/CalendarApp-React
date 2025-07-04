
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarBox, CalendarModal, FabAddNew, FabDelete, NavBar} from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

import './style.css';
import { useUiStore, useCalendarStore } from '../../Hooks';


export const CalendarPage = () => {

  const { events, setActivateEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();
  const [ LastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week');

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
    // console.log({ DoubleClick: event});
    openDateModal()
    
  }

    const onSelect = (event) => {
    // console.log({ Click: event});
    setActivateEvent( event );
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

      <FabAddNew/>
      <FabDelete/>

    </>
  )
}