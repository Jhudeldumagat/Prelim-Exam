$(function() {
    var jokebutton = $(`#joke-button`);
    var jokelist = $(`#joke-list`);
    var jokeResetButton = $(`#joke-reset-button`);
    var jokeLoader = $(`#loader`);
    var fetchLoader = $(`#fetch`);
    var randomJoke = $(`#get-joke-list`)

    var count = 0;
    var maxJoke = 5;




jokeLoader.hide();
reset.hide();


jokebutton.on(`click`,function () {
    makeJoke();
});

jokeResetButton.on(`click`,function() {
    removeAllJoke();
});

async function makeJoke(){

    try{
        jokebuttonDisabled(true);
        var randomJoke = await getRandomJoke();

        await makeJokeLists(randomJoke);

        jokeLoader.hide();

        if(randomJoke != null) {
            count++;
        }
        if(count !=5) {
            jokebuttonDisabled(false);

        }
        if(count ==5) {
            jokebuttonDisabled(true);
            check();

        }
        console.log(count);
    } catch (err) {
        alert(err);
        jokebuttonDisabled(false);
        jokeLoader.hide();
    }
}

function jokebuttonDisabled(val){
    jokebutton.attr();
}


    });
