//meine Variablen
let typing = document.querySelectorAll(".typing")
let input = document.getElementById("schrim")
let inputregExp = new RegExp(input.pattern)// zur Prufung vor der Berechnung
let Tastaturreg = new RegExp("^[abd-zABD-Z{}`#]")//Ausnahmen beim Eintragen mit Tastatur
let clear = document.getElementById("clear")
let gleich = document.getElementById("gleich")


//Verwaltung der Mause-Ereignisse
for (let i = 0; i < typing.length; i++) {
    typing[i].addEventListener("click", () => {
        input.value += typing[i].value

    })
}
gleich.addEventListener("click", () => {
    let result = rechnung(document.getElementById("schrim").value)
    reset()
    appendToInput(result)
})
clear.addEventListener("click", () => {
    reset()
})



//Verwaltung der Tastatur-Ereignisse
document.addEventListener('keydown', (event) => {

    let zuRechnen = document.getElementById("schrim").value.trim()
    if (event.key === 'Enter') {
        document.getElementById("schrim").value = rechnung(zuRechnen)
    }
    if (event.key === "c") {
        event.preventDefault();
        reset()
    }
    if (event.key !== "Backspace" && Tastaturreg.test(event.key)) {
        event.preventDefault()
        input.value[input.value.length - 1] = ''
        console.log(event.key)
        console.log(Tastaturreg.test(event.key))
    }


})

function appendToInput(toAppend) {
    document.getElementById("schrim").value += toAppend
}

function keynote(event) {

    return event.key
}
function rechnung(wert) {
    if (!inputregExp.test(wert)) {
        return "Error"
    }
    else {
        var kalkul = eval(wert)
        return kalkul
    }
}

function reset() {
    document.getElementById("schrim").value = ""
}