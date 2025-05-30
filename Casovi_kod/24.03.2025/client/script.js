document.addEventListener("DOMContentLoaded", () => {
  const navEvents = document.getElementById("nav-events");
  const navAddEvent = document.getElementById("nav-add-event");
  const eventSection = document.getElementById("events-section");
  const addEventSection = document.getElementById("add-event-section");
  const eventsList = document.getElementById("eventsList");

  navEvents.addEventListener("click", () => {
    eventSection.classList.remove("hidden");
    addEventSection.classList.add("hidden");
  });
  navAddEvent.addEventListener("click", () => {
    eventSection.classList.add("hidden");
    addEventSection.classList.remove("hidden");
  });
  async function loadEvents() {
    eventsList.textContent = "Loading...";
    try {
      const response = await fetch("http://localhost:3000/api/events/");
      const data = await response.json();
      if (Array.isArray(data)) {
        // za proverka dali e niza
        eventsList.innerHTML = "";
        data.forEach((x) => {
          const div = document.createElement("div");
          div.classList.add("event-item");
          div.innerHTML = `
                    <strong>${x.artist}</strong><br>
                    Location: ${x.location}<br>
                    Date: ${new Date(x.date).toLocaleString()}<br>
                    Ticket: €${x.ticketPrice}<br>
                    <button class="delete-btn"data-id=${x._id}>Delete</button>
                    `;
          eventsList.appendChild(div);
        });
        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", async () => {
                const id = button.getAttribute("data-id");
                if(confirm("Are you sure you want to delete this even")){
                    try {
                        const deleteResponse = await fetch(`http://localhost:3000/api/events/${id}`, {method: "DELETE"});
                        if(deleteResponse.ok){
                            loadEvents();
                        }
                        else{
                            alert("Failed to delete event");
                        }
                    } catch (error) {
                        console.error("Error deleting event:", error);
                        alert("Error deleting event");
                    }
                }
            })
        })
      }
      else{
        eventsList.textContent = "No events found"
      }
    } catch (error) {
      eventsList.textContent = "Failed to Load events...";
      console.error(error);
    }
  }
  const form = document.getElementById("eventForm");
  const responseMessage = document.getElementById("responseMessage");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const artist = document.getElementById("artist").value.trim();
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const ticketPrice = parseInt(document.getElementById("ticketPrice").value);
    const payload = {
        artist,
        location,
        date: new Date().toISOString(),
        ticketPrice
    };
    try {
        const response = await fetch("http://localhost:3000/api/events/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
        if(response.ok){
            responseMessage.textContent = "Event added successfully";
            responseMessage.className = "success";
            form.reset();
            loadEvents();
        }
        else{
            const errorMessage = await response.json();
            responseMessage.textContent = `Error: ${errorMessage || "Failed to add event"}`;
            responseMessage.className = "error";
        }
    } catch (error) {
        responseMessage.textContent = `Network error: ${error.message}`;
        responseMessage.className = "error";
    }
  });
  loadEvents();
});
