document.getElementById("version_number").innerText = generate_version_number();

function generate_version_number() {
    let date = new Date();
    let version_number = date.getFullYear().toString().substring(2);
    let onejan = new Date(date.getFullYear(), 0, 1);
    version_number += "w"+ Math.ceil( (((date - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
    version_number += "d"+date.getDay();
    return version_number;
}
