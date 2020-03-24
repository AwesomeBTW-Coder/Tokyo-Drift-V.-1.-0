class Form{
constructor(){


}
display(){
    var title = createElement("h1")
    title.html("Tokyo Drift Racing")
    title.position(130,0) 
    var greeting = createElement("h2")
    var input = createInput("Name")
    input.position(130,160)
    var button = createButton("Play")
    button.position(250,200)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount += 1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("Hello There General " + name)
        greeting.position(130,160)
    })

}

}