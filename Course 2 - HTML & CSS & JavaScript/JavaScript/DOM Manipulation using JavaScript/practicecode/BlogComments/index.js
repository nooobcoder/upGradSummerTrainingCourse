document
	.getElementById("commentSubmit")
	.addEventListener(
		"click",
		() =>
			(document.getElementById("addEventNames").innerHTML += `<p>${
				document.getElementById("commentInput").value
			}</p>`)
	);

var likeCount = 0;
const setLikeLabel = () => {
	if (likeCount === 0) {
		document.getElementById("likeCount").innerText =
			"Be the first one to like this!";
		likeCount++;
	} else if (likeCount === 1) {
		document.getElementById("likeCount").innerText = "1 person likes this";
		likeCount++;
	} else {
		document.getElementById(
			"likeCount"
		).innerText = `${likeCount} people have liked this!`;
		likeCount++;
	}
};

setLikeLabel();
