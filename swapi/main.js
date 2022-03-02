// const { default: axios } = require("axios");



const btn = document.querySelector("button");

function btnClick(){
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(response => {
        let resArray = response.data.results[0].residents;
        resArray.forEach(element => {
            axios.get(`${element}`)
            .then(response => {
                let newElement = document.createElement('h2');
                newElement.innerHTML = response.data.name;
                document.body.appendChild(newElement);
            })
            
        });
    })
    
}

btn.addEventListener('click', btnClick);

