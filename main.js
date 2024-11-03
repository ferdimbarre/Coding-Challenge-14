// error handling with try and catch
const fetchAPI = async function () {
    document.getElementById("loading").style.display = "block"; 
    try {
const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
if (!res.ok) {
    throw new Error("data not available") //fetch failed eg api is down
}
const data = await res.json()
if (data.length === 0){
throw new Error ("no tickets available") //throw error in case there are no tickets 
}
ticketsData(data) // calls function that will display ticket data 
    } catch (error) {
    console.log(error);
    showError(error.message) //displays the custom eror message 

    } finally {
        document.getElementById("loading").style.display = "none"; // using finally to hide if api failed or succeeded
    }
}
fetchAPI(); 

// error message 
// function to display the error message 
function showError (message) {
    const errorMessage =document.getElementById("error-msg")
    errorMessage.textContent = message
 };  //will display error message if there is an error 


// function to display tickets data 
function ticketsData (tickets) {
    const ticketPlace = document.getElementById("display-tickets")
    let ticketsinHTML = ``;
    tickets.forEach((ticket) => {
        ticketsinHTML += `
        <section class="ticket" >
        <h3>${ticket.title}</h3>
        <p>${ticket.body}</p>
        <p>Name: ${ticket.userId}</p>
        <p> ID: ${ticket.id}</p>
    </section> 
 ` 
    }); //organizes the display  in the html
    ticketPlace.innerHTML= ticketsinHTML ; 
}