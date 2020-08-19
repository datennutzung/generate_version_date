function init() {
    const version_date = document.querySelector("#version_date");
    version_date.innerText = generate_version_date();
    version_date.addEventListener("click", copyMe)
}

function generate_version_date() {
    let date = new Date();
    let version_number = date.getFullYear().toString().substring(2);
    let first_day = new Date(date.getFullYear(), 0, 1);
    version_number += "w"+ Math.ceil( (((date - first_day) / 86400000) + first_day.getDay() + 1) / 7 );
    version_number += "d"+date.getDay();
    return version_number;
}

function copyMe(event) {
	let copyText = event.target.innerText;
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		if (result.state == 'granted' || result.state == 'prompt') {
			navigator.clipboard.writeText(copyText);
		}
	});
}