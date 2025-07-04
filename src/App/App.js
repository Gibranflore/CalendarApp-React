import { configureStore } from "@reduxjs/toolkit";
import { UiSlice } from "./Ui/UiSlice";
import { CalendarSlice } from "./calendar/CalendarSlice";


export const store = configureStore({
    reducer: {
        ui: UiSlice.reducer,
        calendar: CalendarSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false
    })
})