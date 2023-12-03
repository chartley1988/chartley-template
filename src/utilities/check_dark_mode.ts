function checkUserPreference() {
	const preference =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	return preference;
}

function onUserChange() {
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', (event) => {
			const newColorScheme = event.matches ? 'dark' : 'light';
			updateColourTheme(newColorScheme);
		});
}

function updateColourTheme(colour: 'dark' | 'light') {
	const body = document.getElementById('page-body');
	if (body) {
		body.className = `${colour}-theme`;
	}
}

export default {
	checkUserPreference,
	onUserChange,
	updateColourTheme,
};
