const flipCards = Array.from(document.getElementsByClassName("flip-card"));
flipCards.forEach((card) => {
	const props = JSON.parse(card.dataset.props);

	let flipped = true;
    console.log(props.faceUp);
	if (props.faceUp !== false) {
		flipped = false;
	}
	let flipEnabled = true;

	const back = card.children[0];
	const front = card.children[1];

	if (props.hoverFlip === false || props.hoverFlip === undefined) {
		[back, front].forEach((side) => {
			side.addEventListener("click", handleClick);
		});
	}

	function handleClick(event) {
		console.log(flipped);

		event.stopPropagation();
		if (flipped) {
			flipped = false;
			back.classList.add("flipped");
			front.classList.remove("flipped");
		} else {
			flipped = true;
			back.classList.remove("flipped");
			front.classList.add("flipped");
		}
	}
});
