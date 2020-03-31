let rows = 24;
let cols = 24;


function initialize() {
    createTable();
}

function createTable() {
    console.log("hello world");
    let gridContainer = document.getElementById("gridContainer");
    if(!gridContainer){
        console.error("Problem: no div for the grid table!");
    }
    let table = document.createElement("table");
    for(let i=0;i<rows;i++) {
        let tr = document.createElement("tr");
        for(let j=0;j<cols;j++){
            let cell = document.createElement("td");
            cell.setAttribute("id", i+ "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick  = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

function cellClickHandler(){
    let classes = this.getAttribute("class");
    if(classes.indexOf("live") > -1){
        this.setAttribute("class","dead");
    }
    else{
        this.setAttribute("class","live");
    }
}

initialize();