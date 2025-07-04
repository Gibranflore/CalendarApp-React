import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const eventDemo = {
    _id: new Date().getTime(),
    title: 'Fecha de cumpleaños',
    notes: 'Debemos comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
        user: {
        _id: '123',
        name: 'Gibran Flores'
    }

}

export const CalendarSlice = createSlice({
  name: 'calendar', // Nombre del slice
    initialState: {
        events: [
            eventDemo
        ], // Valor inicial
        activeEvent: null
    },
    reducers: {
        onSetActivateEvent: (state, {payload} ) => {
            state.activeEvent = payload
        },

        onAddNewEvent: (state, {payload} ) => {
            state.events.push(payload);
            state.activeEvent = null
        },

        onUpdateEvent: (state, {payload} ) => {
            state.events == state.events.map( event => {
                if( state._id === state._id) {
                    return payload;
                }
            })
        },
        onDeleteEvent: (state) => {
            if( state.activeEvent )
            state.events = state.events.filter( event => event._id !== state.activeEvent._id )
            state.activeEvent = null
        }
    }

});

export const { onSetActivateEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = CalendarSlice.actions;