fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818`).then((data)=>{
    // console.log(data);
        return data.json();
}).then((objectData)=>{
    let tableData=`<tr>
    <td>[<a href="https://www.nitrotype.com/team/" + ${objectData.tag}>${objectData.tag}</a>]</td>
    <td><a href="https://www.nitrotype.com/" + ${objectData.username}>${objectData.displayName}</a></td>
        <td>${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.highestSpeed}</td>
        <td>${objectData.level}</td>
        <td>${objectData.longestSession}</td>
        <td>${objectData.profileViews}</td>
        <td>${objectData.totalCars}</td>
        </tr>`;
    document.getElementById("table_body").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})