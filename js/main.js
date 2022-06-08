document.querySelector("button").addEventListener("click", apiRequest)

async function apiRequest(){
    const name = document.querySelector("input").value;
    try{
        const response = await fetch(`https://simple-chuck-api.herokuapp.com/api/${name}`);
        const data = await response.json();
        console.log(data);
        document.querySelector("#actor").innerText = `Actor: ${data.actor}`;
        document.querySelector("#name").innerText = `Name: ${data.name}`;
        document.querySelector("#occupation").innerText = `Occupation: ${data.occupation}`;
        document.querySelector("#parents").innerText = `Parents: ${data.parents}`;

    } catch (error){
        console.log(error);
    }
}