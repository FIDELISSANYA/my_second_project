let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function akanName() {
    var dateOfBirth = document.getElementById("date").value;
    var monthofBirth = document.getElementById("month").value;
    var yearOfBirth = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;

    let birthDay = new Date("${date}-{month}-{year}");
    var dateStr = birthDay.toDateString();
    let birthDate = birthDay.getDay();

    if (gender === "Male") {
        let name = maleName[birthDay];
        let test = document.getElementById("try");
        test.innerHTML("You were born on " + dateStr + "Your Akan name is " + name);
        if (gender === "Female") {
            let name = femaleName[birthDay];
            let test = document.getElementById("try");
            test.innerHTML("You were born on " + dateStr + "Your Akan name is " + name);
        }