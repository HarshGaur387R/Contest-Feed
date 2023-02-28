window.addEventListener('load', async () => {
    let codeForcesJsonData = await fetch('https://kontests.net/api/v1/codeforces');
    let codeChefJsonData = await fetch('https://kontests.net/api/v1/code_chef');
    let hackerEarthJsonData = await fetch('https://kontests.net/api/v1/hacker_earth');

    codeForcesJsonData = await codeForcesJsonData.json();
    codeChefJsonData = await codeChefJsonData.json();
    hackerEarthJsonData = await hackerEarthJsonData.json();

    createCard(hackerEarthJsonData,'HackerEarth');
    createCard(codeChefJsonData,'CodeChef');
    createCard(codeForcesJsonData, 'CodeForce');
});

function getTimeAndDate(str='',name){
    const date = new Date(str);

    if(name === 'CodeChef'){

        let d = str.split(' ')[0];
        let t = str.split(' ')[1];


        return {Date:`Date :${d}`, Time:`Time :${t}`};
    }
    else{

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
      
        return {Time: `Time: ${formattedTime}`,
        Date: `Date: ${formattedDate}`};
    }
}


function createCard(jsonData,param = '') {
    
    jsonData.forEach(element => {
        // Create a new card element
        const cardElement = document.createElement('div');
        cardElement.className = 'card';


        // Add the image to the card
        const imgElement = document.createElement('img');

        if (param === 'HackerEarth') {
            
            imgElement.src = '/assetes/cdnlogo.com_hackerearth.svg';
        }
        else if (param === 'CodeForce'){

            imgElement.src = '/assetes/code-forces.svg';
        }
        else if (param === 'CodeChef'){

            imgElement.src = '/assetes/icons8-codechef.svg';

        }
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
        cardElement.appendChild(linkElement);


        // Add the start and end Date to the card
        const dateElement = document.createElement('div');
        dateElement.className = 'flex jc-space-between';
        const startDateElement = document.createElement('code');
        startDateElement.style.marginLeft = '4px';
        startDateElement.style.marginBottom = '4px';
        
        let startDate = getTimeAndDate(element.start_time,param).Date;
        let endDate = getTimeAndDate(element.end_time,param).Date; 

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
    
        let startTime = getTimeAndDate(element.start_time, param).Time;
        let endTime = getTimeAndDate(element.end_time, param).Time; 

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
        applyButtonElement.addEventListener('click',()=>{
            window.open(element.url,'_blank','width=500,height=500');
        })

        // Add the card to the card holder container
        const cardHolderElement = document.getElementById('cardHolder');
        cardHolderElement.appendChild(cardElement);
    });    
}

let All = document.getElementById('All');
let HackerEarth = document.getElementById('HackerEarth');
let CodeChef = document.getElementById('CodeChef');
let CodeForces = document.getElementById('CodeForces');

All.addEventListener('click',async ()=>{

    const cardHolderElement = document.getElementById('cardHolder');
    cardHolderElement.replaceChildren();
    
    let codeForcesJsonData = await fetch('https://kontests.net/api/v1/codeforces');
    let codeChefJsonData = await fetch('https://kontests.net/api/v1/code_chef');
    let hackerEarthJsonData = await fetch('https://kontests.net/api/v1/hacker_earth');

    codeForcesJsonData = await codeForcesJsonData.json();
    codeChefJsonData = await codeChefJsonData.json();
    hackerEarthJsonData = await hackerEarthJsonData.json();

    createCard(hackerEarthJsonData,'HackerEarth');
    createCard(codeChefJsonData,'CodeChef');
    createCard(codeForcesJsonData, 'CodeForce');
    
});

HackerEarth.addEventListener('click',async ()=>{

    const cardHolderElement = document.getElementById('cardHolder');
    cardHolderElement.replaceChildren();

    let hackerEarthJsonData = await fetch('https://kontests.net/api/v1/hacker_earth');
    hackerEarthJsonData = await hackerEarthJsonData.json();

    createCard(hackerEarthJsonData,'HackerEarth');

});


CodeChef.addEventListener('click',async ()=>{

    const cardHolderElement = document.getElementById('cardHolder');
    cardHolderElement.replaceChildren();

    let codeChefJsonData = await fetch('https://kontests.net/api/v1/code_chef');
    codeChefJsonData = await codeChefJsonData.json();

    createCard(codeChefJsonData,'CodeChef');

});

CodeForces.addEventListener('click',async ()=>{

    let cardHolderElement = document.getElementById('cardHolder');
    cardHolderElement.replaceChildren();

    let codeForcesJsonData = await fetch('https://kontests.net/api/v1/codeforces');
    codeForcesJsonData = await codeForcesJsonData.json();


    createCard(codeForcesJsonData, 'CodeForce');

});


// CodeChf icon:-

// <a target="_blank" href="https://icons8.com/icon/O4SEeX66BY8o/codechef">Codechef</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>