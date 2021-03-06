class Record {
    constructor(argument){
        console.log('new score class been created', argument)
    this.score = argument.score
    this.player = argument.player
    this.game = argument.game
    this.created = argument.created_at
    this.id = argument.id
    this.render()
    }
    //score rendering
    render(){
        console.log('rendering', this.score)
        let li = document.createElement('li')
        if (this.player && this.game) {
            li.innerHTML = `${this.score} by ${this.player.name} in ${this.game.title}`
            console.log(li.innerHTML)
        } else {
            li.innerHTML = `${this.score} by ${currentPlayer.name} in ${currentGame.title}`
            console.log(li.innerHTML)
        }
        ul.appendChild(li)
    }
    //destroy all li
    static destroyScores(){
        while (ul.firstChild) {
            console.log('destroying li')
            ul.removeChild(ul.lastChild);
          }
    }

}