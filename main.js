async function create(ids){
    document.write('<div id="Container" class="Container">');
    document.write('        <div id="Content" class="Content">');
    document.write('            <div id="Info" class="Info">');
    document.write('                <h1 id="title" class="title">N/A</h1>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <video src="" id="player" class="player" width="2000" height="500" controls></video>');
    document.write('             <br>');
    document.write('                <h1 id="description" class="description">N/A</h1>');
    document.write('            </div>');
    document.write('            ');
    document.write('        </div>');
    document.write('    </div>');   
    var id = ids
        var rawurl = "https://raw.githubusercontent.com/BioShot/xtv.store/main/"
        var hosturl = "http://https://bioshot.github.io/xtv.store/"
        var videourl = hosturl+id+"/"+id+".mp4"
        var title = rawurl+id+"/"+"title.txt"
        var description = rawurl+id+"/"+"description.txt"
        var background = hosturl+id+"/"+"bg.png"
        fetch(title)
        .then(responce => document.getElementById("title").innerHTML = responce.text())
        
        var x = fetch(description)
    .then((response) => response.text())
    .then((responseJSON) => {
       document.getElementById("description").innerHTML = responseJSON
    });
    var z = fetch(title)
    .then((response) => response.text())
    .then((responseJSON) => {
       document.getElementById("title").innerHTML = responseJSON
    });
    document.getElementById("player").setAttribute("src","https://bioshot.github.io/xtv.store/"+id+"/"+id+".mp4");
    document.getElementById("player").style.borderRadius = "9px"
    document.getElementById("player").style.padding = "2px"
    document.getElementById("player").load()
    document.querySelector("body").style.backgroundImage = "url("+"https://bioshot.github.io/xtv.store/"+id+"/"+"bg.png)"

        
    }

function setdata(title,description) {
    
}
    

    new URLSearchParams(window.location.search).forEach((id) => {
        console.log(id)
        create(id)
    })
