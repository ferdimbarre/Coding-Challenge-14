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
 