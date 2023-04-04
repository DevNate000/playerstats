// CHANGE //
// scrapper username //
// src img //
// name_table //

// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------- //

fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818`).then((data)=>{
        return data.json();
}).then((objectData)=>{
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="image/basic.png">';
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : "othercar";
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let tableData = `
        <h1>${membershipImage} [<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}]<a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></h1>
        <h7 class="gold">"${objectData.title}"</h7>
        <h3>LVL ${objectData.level}</h3>
        <h2>${objectData.avgSpeed}</h2>
        <p>Avg WPM</p>
        <h3 class="gold">${objectData.highestSpeed}</h3>
        <p class="gold">Top WPM</p>
        <h5 class="races">${objectData.racesPlayed} Total Races</h5>
        <p>Profile Views ${objectData.profileViews}</p>
        <p>Longest Session ${objectData.longestSession}</p>
        <img class="largeimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}_large_${carHueAngle}.png" alt="©">                        
        </tr>`;
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
    let carAssetkey = objectData.carID === 333 ? "ytdriver" : "othercar";
    let carHueAngle = objectData.carHueAngle === 0 ? 10 : objectData.carHueAngle;
    let tableData=`<tr>
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${carAssetkey}_large_${carHueAngle}.png" alt="©"></td> 
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td class="races">${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${objectData.level}</td>
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
    let tableData=`<tr>
    <td><img class="tinyimg" src="image/car_toonidy.png" alt="ytdriver"></td> 
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${objectData.carID}_large_1_10.png" alt="©"></td>
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td>${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${objectData.level}</td>
        <td>${objectData.longestSession}</td>
        <td>${objectData.profileViews}</td>
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
    let tableData=`<tr>
    <td><img class="tinyimg" src="image/car_toonidy.png" alt="ytdriver"></td> 
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${objectData.carID}_large_1_10.png" alt="©"></td>
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td>${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${objectData.level}</td>
        <td>${objectData.longestSession}</td>
        <td>${objectData.profileViews}</td>
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
    let membershipImage = objectData.membership === "gold" ? '<img class="membershipimg" src="image/gold.png">' : '<img class="membershipimg" src="basic.png">';
    let tableData=`<tr>
    <td><img class="tinyimg" src="image/car_toonidy.png" alt="ytdriver"></td> 
    <td><img class="tinyimg" src="https://www.nitrotype.com/cars/painted/${objectData.carID}_large_1_10.png" alt="©"></td>
    <td class="membershipimg">${membershipImage}</td>
    <td>[<a href="https://www.nitrotype.com/team/${objectData.tag}">${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/racer/${objectData.username}">${objectData.username}</a></td>
        <td>${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${objectData.level}</td>
        <td>${objectData.longestSession}</td>
        <td>${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        <td>${objectData.createdStamp /86400 + 3/30/23 * (1970,1,1)-0.167}</td>
        </tr>`;
    document.getElementById("1guest_table").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
// ----------------------------------------------------------------------------------------- //