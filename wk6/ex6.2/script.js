const {createApp} = Vue;

createApp({
    data() { //whatever is returned we have access to
        return {
            name: "World",
            myName: "Kiley!",
            code: true
        }
    }
}).mount("#myApp");