// work for enter button 
const search = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');

search.addEventListener('keypress', function (event) {
    if ((event.key) == 'Enter') {
        searchButton.click();
    }
})

const loadTeam = () => {
    const inputText = document.getElementById('input-field');
    const searchText = inputText.value;
    inputText.value = '';
    console.log(searchText);

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTeam(data.teams))

}
const displayTeam = (data) => {
    console.log(data);
    const teamContainer = document.getElementById('team-container');
    teamContainer.textContent = '';
    for (const team of data) {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
       <div class="bg-warning" style="--bs-bg-opacity: .75;">
             <div class="d-flex justify-content-between">
                 <img class="img-fluid w-25" src="${team.strTeamLogo}"/>
                <img class="img-fluid w-25" src="${team.strTeamBadge}"/>
            </div>
            <div class="text-center">
                <h1 class="text-white">Team Name: <span class='text-success'>${team.strTeam}</span></h1>
                <h3 class="text-white">League Name:<span class='text-danger'> ${team.strLeague}</span></h3>
                <h5 class="text-white">Country Name: ${team.strCountry}</h5>
                <p class="text-white">Gender: ${team.strGender}</p>
                <p class="text-white">Gender: ${team.strStadium}</p>
                <img class="img-fluid w-25 rounded" src="${team.strStadiumThumb}"/>
                <p class="text-white text-success">About: ${team.strDescriptionEN.slice(0, 100)}</p>
                <p class="text-white">Stadium: ${team.strStadiumDescription.slice(0, 100)}</p>
        
             </div>
       </div>
        
        `;
        teamContainer.appendChild(div);
    }
}