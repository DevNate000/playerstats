// CHANGE //
// scrapper username //
// name_table //

// SEASON LEVEL //

// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : objectData.carID;
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let largeValue = objectData.carID >= 227 ? "_large_" : "_large_1_";
    let racenum = objectData.racesPlayed; var races = racenum.toLocaleString('en-US');    let viewsnum = objectData.profileViews; var views = viewsnum.toLocaleString('en-US'); let sessionnum = objectData.longestSession; var session = sessionnum.toLocaleString('en-US');
    let maxseasonlevel = 25;   
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let crttimestamp = objectData.createdStamp; let date = new Date(crttimestamp * 1000); let month = date.getMonth() + 1; let day = date.getDate(); let year = date.getFullYear(); let formattedDate = `${month.toString().padStart(2, "")}/${day.toString().padStart(2, "")}/${year}`
    let tableData = `
    <div>
        <h1 class="profileheader">${membershipImage} [<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}]<a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.displayName}</a></h1>
        <h7 class="title">"${objectData.title}"</h7>
        <h3 class="lvl">LVL ${infinateValue}${levelValue}</h3>
        <h7 class="date">Member Since ${formattedDate}</h7>
        <h2 class="aspeed">${objectData.avgSpeed}</h2>
        <p class="aspeed">Avg WPM</p>
        <h3 class="tspeed">${objectData.highestSpeed}</h3>
        <p class="tspeed">Top WPM</p>
        <h5 class="races">${races} Total Races</h5>
        <p class="views">Profile Views ${views}</p>
        <p class="session">Longest Session ${session}</p>
    </div>
        <img class="largeimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©">
        `;
    document.getElementById("nathaniel818_stats").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})



// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : objectData.carID;
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let largeValue = objectData.carID >= 227 ? "_large_" : "_large_1_";
    let racenum = objectData.racesPlayed; var races = racenum.toLocaleString('en-US');    let viewsnum = objectData.profileViews; var views = viewsnum.toLocaleString('en-US'); let sessionnum = objectData.longestSession; var session = sessionnum.toLocaleString('en-US');
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let crttimestamp = objectData.createdStamp; let date = new Date(crttimestamp * 1000); let month = date.getMonth() + 1; let day = date.getDate(); let year = date.getFullYear(); let formattedDate = `${month.toString().padStart(2, "")}/${day.toString().padStart(2, "")}/${year}`
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.displayName}</a></td>
        <td class="races">${races}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${session}</td>
        <td class="views">${views}</td>
        <td>${objectData.totalCars}</td>
        <td>${formattedDate}</td>
        </tr>`;
    document.getElementById("nathaniel818_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})

// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/toonidy`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : objectData.carID;
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let largeValue = objectData.carID >= 227 ? "_large_" : "_large_1_";
    let racenum = objectData.racesPlayed; var races = racenum.toLocaleString('en-US');    let viewsnum = objectData.profileViews; var views = viewsnum.toLocaleString('en-US'); let sessionnum = objectData.longestSession; var session = sessionnum.toLocaleString('en-US');
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let crttimestamp = objectData.createdStamp; let date = new Date(crttimestamp * 1000); let month = date.getMonth() + 1; let day = date.getDate(); let year = date.getFullYear(); let formattedDate = `${month.toString().padStart(2, "")}/${day.toString().padStart(2, "")}/${year}`
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.displayName}</a></td>
        <td class="races">${races}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${session}</td>
        <td class="views">${views}</td>
        <td>${objectData.totalCars}</td>
        <td>${formattedDate}</td>
        </tr>`;
    document.getElementById("toonidy_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})

// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/travis`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : objectData.carID;
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let largeValue = objectData.carID >= 227 ? "_large_" : "_large_1_";
    let racenum = objectData.racesPlayed; var races = racenum.toLocaleString('en-US');    let viewsnum = objectData.profileViews; var views = viewsnum.toLocaleString('en-US'); let sessionnum = objectData.longestSession; var session = sessionnum.toLocaleString('en-US');
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let crttimestamp = objectData.createdStamp; let date = new Date(crttimestamp * 1000); let month = date.getMonth() + 1; let day = date.getDate(); let year = date.getFullYear(); let formattedDate = `${month.toString().padStart(2, "")}/${day.toString().padStart(2, "")}/${year}`
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.displayName}</a></td>
        <td class="races">${races}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${session}</td>
        <td class="views">${views}</td>
        <td>${objectData.totalCars}</td>
        <td>${formattedDate}</td>
        </tr>`;
    document.getElementById("travis_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/grue8`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : objectData.carID;
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let largeValue = objectData.carID >= 227 ? "_large_" : "_large_1_";
    let racenum = objectData.racesPlayed; var races = racenum.toLocaleString('en-US');    let viewsnum = objectData.profileViews; var views = viewsnum.toLocaleString('en-US'); let sessionnum = objectData.longestSession; var session = sessionnum.toLocaleString('en-US');
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let crttimestamp = objectData.createdStamp; let date = new Date(crttimestamp * 1000); let month = date.getMonth() + 1; let day = date.getDate(); let year = date.getFullYear(); let formattedDate = `${month.toString().padStart(2, "")}/${day.toString().padStart(2, "")}/${year}`
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.displayName}</a></td>
        <td class="races">${races}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${session}</td>
        <td class="views">${views}</td>
        <td>${objectData.totalCars}</td>
        <td>${formattedDate}</td>
        </tr>`;
    document.getElementById("1guest_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
// ----------------------------------------------------------------------------------------- //