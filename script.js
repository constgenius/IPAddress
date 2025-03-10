async function getIP(){
    try{
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        document.getElementById("ip").textContent = data.ip;
    }catch(error){
        console.error("Error fetching the IP:",error);
    }
}

getIP();