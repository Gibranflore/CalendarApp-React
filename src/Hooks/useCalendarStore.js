import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActivateEvent } from "../App/calendar/CalendarSlice"


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
            
        } else {
            dispatch(onAddNewEvent( {...calendarEvent, _id: new Date().getTime()} ) )
        }
    }

    return {
        //*Propiedades 
        activeEvent,
        events,

        //*Metodos
        setActivateEvent,
        startSavingEvent,
    }
}
