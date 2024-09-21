document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar() {
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    const busca = document.getElementById('busca').value;
    const url = `https://restcountries.com/v3.1/name/${busca}?fullText=true`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const pais = data[0];
        
        document.getElementById('nome').innerText = pais.name.common;
        document.getElementById('capital').innerText = pais.capital[0];
        document.getElementById('continente').innerText = pais.continents[0];
        document.getElementById('populacao').innerText = pais.population.toLocaleString();
        document.getElementById('bandeira').src = pais.flags.svg;
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });
}
