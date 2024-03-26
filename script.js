const currency = [
    {
        "img": "https://static.crypto.com/token/icons/bitcoin/color_icon.png",
        "name": "Bitcoin",
        "shortcut": "BTN",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/ethereum/color_icon.png",
        "name": "Ethereum",
        "shortcut": "ETH",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/tether/color_icon.png",
        "name": "Tether",
        "shortcut": "USDT",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/tron/color_icon.png",
        "name": "TRON",
        "shortcut": "TRX",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/immutable-x/color_icon.png",
        "name": "Immutable X",
        "shortcut": "IMX",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/stellar/color_icon.png",
        "name": "Stellar",
        "shortcut": "XLM",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/cardano/color_icon.png",
        "name": "Cardano",
        "shortcut": "ADA",
        "price": 0,
    },
    {
        "img": "https://static.crypto.com/token/icons/shiba-inu/color_icon.png",
        "name": "Shiba Inu",
        "shortcut": "SHIB",
        "price": 0,
    }
]

console.log(currency);
for (let i = 0; i < currency.length; i++) {
    var img = currency[i].img;
    var name = currency[i].name;
    var short = currency[i].shortcut;
    var price = currency[i].price;

    document.getElementById('preview').innerHTML += '<div class="currency">' +
    '<img src="'+ img +' " alt="" >' +
    '<div class="name">' +
    '<h2>' + name + '</h2>' +
    '<h4>' + short + '</h4>' +
    '</div>' +
    '<h2>' + price + '</h2>' +
    '</div>';
}