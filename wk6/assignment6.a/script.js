const {createApp} = Vue;

createApp({
    data() { // whatever is returned we have access to
        return {
            llamaHappy: false,
            llamaAngry: true,
            llamaSpit: "A llama can spit green, partially digested food, up to 15 feet or more.",
            llamaLimit: "Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.",
            llamaAge: "Llamas live to be about 20 years old. Though some only live for 15 years and others live to be 30 years old.",
            llamaMama: "Mama llamas usually only have one baby at a time and llama twins are incredibly rare. Pregnancy lasts for about 350 days, nearly a full year.",
            llamaYarn: "Yarn made from llama fiber is soft and lightweight, yet remarkably warm.",
            llamaPop: "The current population of llamas and alpacas in South America is estimated to be more than 7 million.",
            llamaColor: "Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red, and white.",
            llamaPoop: "Historically, the Incas in Peru burned dried llama poop for fuel."
        }
    }
}).mount("#myApp");