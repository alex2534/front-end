export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("auth");
		if (serializedState === null) return undefined;
		return { auth: JSON.parse(serializedState) };
	} catch (e) {
		return undefined;
	}
};

export const saveState = (state: any) => {
	try {
		const serializedState = JSON.stringify(state.auth);
		localStorage.setItem("auth", serializedState);
	} catch (e) {
		// Ignore write errors
	}
};
