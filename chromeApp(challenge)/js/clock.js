const todayDate = document.getElementById("todayDate");

function timeNow() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    todayDate.innerHTML = `${years} / ${months} / ${days} <br>
	<strong>${hours} : ${minutes} : ${seconds}</strong>`;
}

timeNow();
setInterval(timeNow, 1000);
