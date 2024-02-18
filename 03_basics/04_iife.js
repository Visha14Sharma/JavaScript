// Immediately Invoked Function Expression (IIFFE)


(function chai() {
    console.log(`DB CONNECTED`);
    
})();


(  (name) => {
    console.log(`DB CONNECTED Two ${name}`);

})('vishal')