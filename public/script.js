window.addEventListener('load', async () => {
    let codeForcesJsonData = await fetch('https://kontests.net/api/v1/codeforces');
    let codeChefJsonData = await fetch('https://kontests.net/api/v1/code_chef');
    let hackerEarthJsonData = await fetch('https://kontests.net/api/v1/hacker_earth');

    codeForcesJsonData = await codeForcesJsonData.json();
    codeChefJsonData = await codeChefJsonData.json();
    hackerEarthJsonData = await hackerEarthJsonData.json();

    createCard(hackerEarthJsonData,'HackerEarth');
});

function getTimeAndDate(str){
    const date = new Date(str);

    // Get the various components of the date
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note that month is zero-indexed
    const day = date.getDate();

    // Format the time string with AM/PM
    const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;
    const formattedDate = `${year}-${month}-${day}`;
    // Output the formatted time string
    return {Time: `Time: ${formattedTime}`,
            Date: `Date: ${formattedDate}`};
}


function createCard(jsonData,param = '') {
    
    jsonData.forEach(element => {
        // Create a new card element
        const cardElement = document.createElement('div');
        cardElement.className = 'card';


        // Add the image to the card
        const imgElement = document.createElement('img');
        imgElement.src = '/assetes/lunch-svgrepo-com.svg';
        imgElement.alt = 'Contest Image';
        imgElement.style.width = '50%';
        cardElement.appendChild(imgElement);


        // Add the contest name to the card
        const contestNameElement = document.createElement('h1');
        contestNameElement.style.width = '95%';
        contestNameElement.style.height = '27px';
        contestNameElement.style.overflow = 'auto';
        contestNameElement.style.justifyContent = 'center';
        contestNameElement.style.textAlign = 'center';
        contestNameElement.textContent = element.name;
        cardElement.appendChild(contestNameElement);


        // Add the status to the card
        const statusElement = document.createElement('p');
        statusElement.className = 'cardTitle';
        if (element.in_24_hours === 'No') {
            statusElement.style.color = 'green';
        }
        else{
            statusElement.style.color = 'red';
        }
        statusElement.textContent =`In 24Hours: ${element.in_24_hours}`;
        cardElement.appendChild(statusElement);


        // Add the organizer name to the card
        const organizerNameElement = document.createElement('p');
        organizerNameElement.className = 'cardOrgName';
        organizerNameElement.textContent = param;
        cardElement.appendChild(organizerNameElement);


        // Add the link icon to the card
        const linkElement = document.createElement('div');
        linkElement.style.margin = '24px 0';
        const linkIconElement = document.createElement('i');
        linkIconElement.className = 'link';
        linkIconElement.textContent = 'visit';
        const linkAnchorElement = document.createElement('a');
        linkAnchorElement.href = 'url';
        linkAnchorElement.appendChild(linkIconElement);
        linkElement.appendChild(linkAnchorElement);
        cardElement.appendChild(linkElement);


        // Add the start and end Date to the card
        const dateElement = document.createElement('div');
        dateElement.className = 'flex jc-space-between';
        const startDateElement = document.createElement('code');
        startDateElement.style.marginLeft = '4px';
        startDateElement.style.marginBottom = '4px';
    
        let startDate = getTimeAndDate(element.start_time).Date;
        let endDate = getTimeAndDate(element.end_time).Date; 

        startDateElement.textContent = startDate;
        const endDateElement = document.createElement('code');
        endDateElement.style.marginRight = '4px';
        endDateElement.textContent = endDate;
        dateElement.appendChild(startDateElement);
        dateElement.appendChild(endDateElement);
        cardElement.appendChild(dateElement);


        // Add the start and end times to the card
        const timeElement = document.createElement('div');
        timeElement.className = 'flex jc-space-between';
        const startTimeElement = document.createElement('code');
        startTimeElement.style.marginLeft = '4px';
        startTimeElement.style.marginBottom = '4px';
    
        let startTime = getTimeAndDate(element.start_time).Time;
        let endTime = getTimeAndDate(element.end_time).Time; 

        startTimeElement.textContent = startTime;
        const endTimeElement = document.createElement('code');
        endTimeElement.style.marginRight = '4px';
        endTimeElement.textContent = endTime;
        timeElement.appendChild(startTimeElement);
        timeElement.appendChild(endTimeElement);
        cardElement.appendChild(timeElement);


        // Add the apply button to the card
        const applyButtonElement = document.createElement('button');
        applyButtonElement.textContent = 'Apply';
        cardElement.appendChild(applyButtonElement);


        // Add the card to the card holder container
        const cardHolderElement = document.getElementById('cardHolder');
        cardHolderElement.appendChild(cardElement);
    });    
}


// TODO : Write program to create cards for given data:

/*

{
    duration: "4325340.0",
​​
    end_time: "2023-02-28T20:40:00.000Z",
​​
    in_24_hours: "No",
​​
    name: "Build a Web App for Millions of Users",
​​
    start_time: "2023-01-09T19:11:00.000Z",
​​
    status: "CODING",
​​
    type_: "Monthly Challenges", (only hackerearth have type object)
​​
    url: "https://pinetwork.hackerearth.com/"
}

*/

// const dateString = '2023-01-09T19:11:00.000Z';
// const date = new Date(dateString);

// // Get the various components of the date
// const year = date.getFullYear();
// const month = date.getMonth() + 1; // Note that month is zero-indexed
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// // Format the date and time string
// const formattedDate = `${year}-${month}-${day}`;
// const formattedTime = `${hours}:${minutes}:${seconds}`;

// // Output the formatted date and time string
// console.log(`Date: ${formattedDate}`);
// console.log(`Time: ${formattedTime}`);





// const dateString = '2023-01-09T19:11:00.000Z';
// const date = new Date(dateString);

// // Get the various components of the date
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const amPm = hours >= 12 ? 'PM' : 'AM';
// const hours12 = hours % 12 || 12;

// // Format the time string with AM/PM
// const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;

// // Output the formatted time string
// console.log(`Time: ${formattedTime}`);