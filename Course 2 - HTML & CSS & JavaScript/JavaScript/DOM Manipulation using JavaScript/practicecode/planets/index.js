var hidden = true;
const listItems = `<ul>
				<li>
					Mercury: It is the closest planet to the Sun, and second
					smallest planet in the solar system.
				</li>
				<li>Venus: It is the second planet in the solar system.</li>
				<li>
					Earth: Our planet earth is the third planet in the solar
					system.
				</li>
				<li>
					Mars: It is the fourth planet from the Sun and is commonly
					referred to as the Red Planet.
				</li>
				<li>
					Jupiter: It is the fifth planet from the Sun and is the
					largest planet in the solar system.
				</li>
				<li>
					Saturn: It is the sixth planet from the Sun and is the
					second largest in the solar system
				</li>
				<li>
					Uranus: It is the seventh planet from the Sun and is the
					third largest in the solar system.
				</li>
				<li>
					Neptune: It is the outermost planet of the Solar System.
				</li>
			</ul>`;

const addListOfEvents = () => {
	hidden = !hidden;
	console.log(hidden);
	hidden && (document.getElementById("addEventNames").innerHTML = null);
	!hidden && (document.getElementById("addEventNames").innerHTML = listItems);
};
