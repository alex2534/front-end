import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { loadState, saveState } from "./localStorage";

const shouldRemember = localStorage.getItem("rememberMe") === "true";
const preloadedState = shouldRemember ? loadState() : undefined;

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	preloadedState,
});

if (shouldRemember) {
	store.subscribe(() => {
		saveState(store.getState());
	});
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
