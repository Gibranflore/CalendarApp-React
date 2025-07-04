import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActivateEvent, onUpdateEvent } from "../App/calendar/CalendarSlice"


export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const {events, activeEvent} = useSelector( state => state.calendar)

    const setActivateEvent = ( calendarEvent ) => {
        dispatch( onSetActivateEvent ( calendarEvent ) )
    }

    const startSavingEvent = async(calendarEvent) => {
        //! Todo debe de llegar del backend

        //! Todo salio bien
        if (calendarEvent._id) {
            dispatch(onUpdateEvent)
            
        } else {
            dispatch(onAddNewEvent( {...calendarEvent, _id: new Date().getTime()} ) )
        }
    }

    const startDeleteEvent = () => {
        dispatch(onDeleteEvent())
    }

    return {
        //*Propiedades 
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //*Metodos
        setActivateEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}
