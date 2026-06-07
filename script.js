const API_URL = "https://api.adviceslip.com/advice";

async function fetchAdvices () {
    try {
        
        const response = await fetch(API_URL, { cache: "no-store" });

        if(!response.ok) {
            throw new Error(`Http error, status : `+response.status);
        } else {
            const result = await response.json();
            displayAdvice(result)
        }
      

    } catch (error) {
        console.log("Failed to load data : " + error)
        document.querySelector(".content").textContent = "Failed to load data !";
        
    }

}

function displayAdvice(adviceObj) {
    const content = document.querySelector(".content");

    const span = content.querySelector("h1 span");
    span.textContent = adviceObj.slip.id;

    const p =content.querySelector("p");
    p.textContent ="”"+  adviceObj.slip.advice+"”";
}

fetchAdvices ();