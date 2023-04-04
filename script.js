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
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let tableData = `
        <h1>${membershipImage} [<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}]<a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></h1>
        <h7 class="gold">"${objectData.title}"</h7>
        <h3>LVL ${infinateValue}${levelValue}</h3>
        <h2>${objectData.avgSpeed}</h2>
        <p>Avg WPM</p>
        <h3 class="gold">${objectData.highestSpeed}</h3>
        <p class="gold">Top WPM</p>
        <h5 class="races">${objectData.racesPlayed} Total Races</h5>
        <p>Profile Views ${objectData.profileViews}</p>
        <p>Longest Session ${objectData.longestSession}</p>
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
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td class="races">${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${objectData.longestSession}</td>
        <td class="views">${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        <td>${objectData.createdStamp /86400 + 3/30/23 * (1970,1,1)-0.167}</td>
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
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td class="races">${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${objectData.longestSession}</td>
        <td class="views">${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        <td>${objectData.createdStamp /86400 + 3/30/23 * (1970,1,1)-0.167}</td>
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
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td class="races">${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${objectData.longestSession}</td>
        <td class="views">${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        <td>${objectData.createdStamp /86400 + 3/30/23 * (1970,1,1)-0.167}</td>
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
    let maxseasonlevel = 25;
    let infinateValue = objectData.level >= maxseasonlevel ? "∞" : "‎ ";
    let levelValue = objectData.level >= maxseasonlevel ? objectData.level-25 : objectData.level;
    let tableData = `<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}${largeValue}${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td class="races">${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${infinateValue}${levelValue}</td>
        <td>${objectData.longestSession}</td>
        <td class="views">${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        <td>${objectData.createdStamp /86400 + 3/30/23 * (1970,1,1)-0.167}</td>
        </tr>`;
    document.getElementById("1guest_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
// ----------------------------------------------------------------------------------------- //