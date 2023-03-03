const {createApp} = Vue;

createApp({
    data() {
        return {
            llamaWiki: "https://en.wikipedia.org/wiki/Llama",
            llamaInfo: "Llama Info!",
            alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",
            alpacaInfo: "Alpaca Info!",
            similarityOne: "Alpacas and llamas are so similar because they are both part of the camelid family.",
            similarityTwo: "Both llamas and alpacas have served humans for transportation of people and goods for many years.",
            similarityThree: "Both species are predominantly found in Peru and in Bolivia",
            baseStyle: {
                background: "red",
                border: "1px solid black",
            },
            overrideStyle: {
                background: "yellow"
            },
            currentRoute: 'similarityThree',
        }
    }
}).mount("#myApp");