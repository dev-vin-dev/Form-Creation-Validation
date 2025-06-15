// Defining the async function
async function fetchUserData(){
    const apiUrl =  'https://jsonplaceholder.typicode.com/users'
    //Container where the data will be stored
    const dataContainer = document.getElementById('api-data');
    //fetch data from API
    try {
        const response =  await fetch(apiUrl);
        // Convert Response to Json
        const users = await response.json();
        //Clear any existing content
        dataContainer.innerHTML="";
        //Creating a user list
        const userList = document.createElement('ul');
        //Loop through the userlist
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent=user.name;
            userList.appendChild(listItem);
        });
        // Append List to container
        dataContainer.appendChild(userList);
    } catch (error){
        //Handle any errors during fetch
        dataContainer.innerHTML="";
        dataContainer.textContent="Failed to load user data";
    }
}
// Run fetchUserData after the DOM has fully loaded
document.addEventListener('DOMContentLoaded',fetchUserData);