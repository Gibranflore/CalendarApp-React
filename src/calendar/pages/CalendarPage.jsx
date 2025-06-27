
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar} from '../';
import { localizer, getMessagesES } from '../../helpers';
import { addHours  } from 'date-fns'

const events = [{
  title: 'Fecha de cumpleaños',
  notes: 'Debemos comprar el pastel',
  start: new Date(),
  end: addHours( new Date() )

}]

export const CalendarPage = () => {

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

  return (
    <>
      <NavBar/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />
    </>
  )
}