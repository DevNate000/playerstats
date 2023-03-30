fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818`).then((data)=>{
    // console.log(data);
        return data.json();
}).then((objectData)=>{
    let tableData=`<tr>
        <td>${objectData.displayName}</td>
        <td>${objectData.username}</td>
        <td>${objectData.racesPlayed}</td>
        <td>${objectData.avgSpeed}</td>
        <td>${objectData.level}</td>
        <td><img src="${objectData.image}"/></td>
        </tr>`;
    document.getElementById("table_body").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
