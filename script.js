// ====== Ustaw tutaj datę startu (format ISO) ======
// Przykład: '2022-05-01T12:00:00' lub '2024-12-31T00:00:00'
const targetDateISO = '2026-04-28T22:35:00';

// ====== Nie musisz nic więcej zmieniać poniżej ======
const targetDate = new Date(targetDateISO);

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const noteEl = document.getElementById('note');

function pad(n){
  return n.toString().padStart(2,'0');
}

function updateClock(){
  const now = new Date();
  let diff = now - targetDate; // dodatnie = minęło od daty; ujemne = data w przyszłości

  if (diff >= 0){
    // czas, który upłynął od targetDate
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days;
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    noteEl.textContent = `Od daty: ${targetDate.toLocaleString()}`;
  } else {
    // data w przyszłości — pokaż ile czasu pozostało
    diff = Math.abs(diff);
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days;
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    noteEl.textContent = `Data w przyszłości: ${targetDate.toLocaleString()} (pozostało)`;
  }
}

// start
updateClock();
setInterval(updateClock, 1000);
