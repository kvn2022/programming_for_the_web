const {createApp} = Vue;

createApp({
    data() { // whatever is returned we have access to
        return {
            llama: "A llama can spit green, partially digested food 15 feet or more.",
            happy: false
        }
    }
}).mount("#myApp");