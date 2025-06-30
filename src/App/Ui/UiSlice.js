import { createSlice } from '@reduxjs/toolkit';

export const UiSlice = createSlice({
  name: 'counter', // Nombre del slice
    initialState: {
        isDateModalOpen: false // Valor inicial
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true
        },

        onClosseDateModal: (state) => {
            state.isDateModalOpen = false
        },
    }
});

export const { onOpenDateModal, onClosseDateModal } = UiSlice.actions;