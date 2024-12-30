let bandsUrl ="https://raw.githubusercontent.com/trajanstevkovski/sedc6-frontend-exam/master/band-data.json"
function Band(name,active,tags,members,albums){
    this.name = name;
    this.isActive = active;
    this.tags = tags;
    this.members = members;
    this.albums = albums;

    this.showActiveMembers = function(){
    let membersString = "";
    for(let i = 0;i< this.members.length;i++){
        let member = this.members[i];
        if(!member.former){
            membersString += member.name + ",";
        }
    }
    return membersString;
}
    this.showFormerMembers = function(){
        let formerMembersString = "";
        let index = 0;
        while(index< this.members.length){
            let member = this.members[index];
            if(member["former"]){
                formerMembersString += `${member["name"]} , `
            }
            index+= 1;
        }
        return formerMembersString;
    }
}
function mapBands(data){
    let bands = [];
    for(let band of data){
        let bandObj = new Band(band.name, band.active, band.tags, band.members, band.albums);
        bands.push(bandObj);
    }
    return bands;
}
function showBandsInfo(bands){
    let resultDiv = document.getElementById("result");
    let resultHtml = "<ul>";
    for(let band of bands){
        let active = band.isActive ? "active" : "Not Active";
        let result = `<li>The band ${band.name} has ${band.albums.length} albums 
            is currently an ${active} band. \n 
            the active members of the band are ${band.showActiveMembers()} \n
            Former members are ${band.showFormerMembers()} </li>`;
        resultHtml += result;
    }
    resultHtml += "</ul>"
    resultDiv.innerHTML = resultHtml;
}
document.getElementById("btn").addEventListener("click", function(){
    fetch(bandsUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(result){
       let bands = mapBands(result);
    showBandsInfo(bands);
    })
    .catch(function(error){
        let errorP = document.getElementById("error");
        errorP.style.color = "red";
        errorP.style.fontWeight = "600";
        errorP.innerText = "Something went wrong! Please try again later";
        console.log(error);
    })
});