// SCRIPT HACK SEARCH YOUR MATCH


// INTEGRATE CDN 

let jquery = "https://code.jquery.com/jquery-3.6.1.slim.min.js"
let script = document.createElement("script")
script.src = jquery /** @params URL API JQUERY*/
// INSERT IN BODY

document.body.append(script)


// SEARCH NAME NEED

let intervalPromise = 0

let nameNeed = "WORLD WAR 3 (4X SPEED)"
let good = false


// FIND

const observerLoading = () => {
    intervalPromise = setInterval(() => {

        console.log("observando")
        if (!$("#loading").is(":visible")) {
            // HIDE LOADING
            PromiseSearch().then(data => {
                if(data !== true){
                    searchNew()
                }
            })
            clearInterval(intervalPromise)
        }
    }, 5)
}

const searchNew = () => {
    $("#ui_open_new_games").click()
    // OBSERVER LOADING

    console.log("PROCESS SEARCH NEW ROOM")
    observerLoading()
}


// AUTO EXECUTE ONE USE
searchNew()



const PromiseSearch = () => {
    return new Promise((resolve, reject) => {

        console.log("busco lo que me pides")
        $.each($(".raised_segment"), function () {
            let name = $(this).find(".autoResizeLine").text()

            if (name == "WORLD WAR 3 (4X SPEED)") {
                // WHAT GAMERS?

                let gamers = $(this).find(".number-of-players").text().replace(" ", "").split("/");

                if (gamers[0] <= 10) {
                    // ALERT ME VERY GOOD MATCH

                    console.log("lo consigo")
                    resolve(true)

                    $(this).find(".func_join_game").click()

                    // FOR SECURITY
                    setTimeout(() => {
                        $(".func_confirm_dialog_accept").click()
                    }, 500)
                }else{
                    // NO LO CONSIGO

                    searchNew()
                }
            }
        })
    })

}

