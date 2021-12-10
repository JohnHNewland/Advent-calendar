function buildCalendar(containerId) {
    console.log(containerId);
    const container = document.getElementById(containerId);
    const frame = document.createElement("div");
    frame.setAttribute("class", "calendar-frame");
    const days = [];
    for (let i = 1; i <= 24; i++) {
      const day = document.createElement("div");
      day.setAttribute("class", "calendar-day");
      day.innerHTML = i;
      day.onclick = () => {
        console.log("asdasdssad", i);
        day.innerHTML = "X";
        day.setAttribute("class", "calendar-day open");
        //delete day.onclick;
      }
      frame.appendChild(day);
    }
    container.appendChild(frame);
  }
  