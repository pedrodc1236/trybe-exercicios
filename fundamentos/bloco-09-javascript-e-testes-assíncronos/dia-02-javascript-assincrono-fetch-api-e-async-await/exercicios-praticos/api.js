const captureUl = document.querySelector('#tag-list');
const fetchCrypto = async () => {
    const API_URL = `https://api.coincap.io/v2/assets`;

    const cryptos = await fetch(API_URL)
        .then((response) => response.json(), (error) => captureUl.innerText = error)
        .then((data) => data.data)

    return cryptos;
};

const setCrypto = async () => {
    const cryptos = await fetchCrypto()

    cryptos
        .filter((_, index) => index < 10)
        .forEach((crypto) => {
        const createLi = document.createElement('li');
        const priceCrypto = Number(crypto.priceUsd);

        createLi.innerText = `${crypto.name} (${crypto.symbol}): ${priceCrypto.toFixed(2)}`;

        captureUl.appendChild(createLi);
    });
}



window.onload = () => setCrypto();
