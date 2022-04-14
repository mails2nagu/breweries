let container=document.createElement("div");
container.className="container";
let row=document.createElement("div");
container.className="row";
let col=document.createElement("div");
container.className="col";


// let col=document.querySelector(".col");



let cards=document.createElement("div");
cards.className = "card1";

let brew_list=document.createElement("section");
brew_list.className = "brew_list";

function Brewlist(user){
    const disp_container=document.createElement('div');
    disp_container.className="disp-container";
    
    disp_container.innerHTML = `<img src=bfri.png class="logo"></img>
    <div>
    <p class="company-name">${user.name}</p>
    <p class="company">Type: ${user.brewery_type}</p>
    <p class="company">Address:  ${user.city}, ${user.state}, ${user.county_province}, ${user.postal_code}, ${user.country} </p>
    <p class="company">Website: ${user.website_url}</p>
    <p class="company">Phone: ${user.phone}</p>
    </div>`;
    
    brew_list.append(disp_container);
        
    }
    cards.append(brew_list);
     
    col.append(cards);
    row.append(col);

    container.append(row);
    document.body.append(container);
    
        async function disp_res() {
        const data =await  fetch("https://api.openbrewerydb.org/breweries");
        const userData =await  data.json();
        userData.forEach((user) => Brewlist(user));
        
      }
      disp_res();