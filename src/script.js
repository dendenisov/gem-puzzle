class Fifteen {

createDOM() {
    this.box = document.createElement('div')
    this.box.setAttribute('id', 'box')
    document.body.append(this.box)
    this.stopGame = document.createElement('div')
    this.stopGame.setAttribute('id', 'stopGame')
    document.body.append(this.stopGame)
    this.stopGameText = document.createElement('p')
    this.stopGameText.textContent = 'click «mix and start» to start game'
    this.stopGame.append(this.stopGameText)

    this.congratulation = document.createElement('div')
    this.congratulation.setAttribute('id', 'congratulation')
    document.body.append(this.congratulation)

    this.messageBlock = document.createElement('div')
    this.messageBlock.setAttribute('id', 'messageBlock')
    this.congratulation.append(this.messageBlock)
    this.buttonMessageOk = document.createElement('button')
    this.buttonMessageOk.textContent = 'Close'
    this.buttonMessageOk.classList.add('btnMessage')
    this.congratulation.append(this.buttonMessageOk)

    this.changeSizeDiv = document.createElement('div')
    this.textChangeSize = document.createElement('p')
    this.changeSizeDiv.setAttribute('id', 'change-size')
    document.body.append(this.changeSizeDiv)
    this.changeSizeDiv.prepend(this.textChangeSize)

    this.sizeThree = document.createElement('span')
    this.sizeThree.textContent = '3x3'
    this.sizeFour = document.createElement('span')
    this.sizeFour.textContent = '4x4'
    this.sizeFive = document.createElement('span')
    this.sizeFive.textContent = '5x5'
    this.sizeSix = document.createElement('span')
    this.sizeSix.textContent = '6x6'
    this.sizeSeven = document.createElement('span')
    this.sizeSeven.textContent = '7x7'
    this.sizeEight = document.createElement('span')
    this.sizeEight.textContent = '8x8'

    this.changeSizeDiv.append(this.sizeThree)
    this.changeSizeDiv.append(this.sizeFour)
    this.changeSizeDiv.append(this.sizeFive)
    this.changeSizeDiv.append(this.sizeSix)
    this.changeSizeDiv.append(this.sizeSeven)
    this.changeSizeDiv.append(this.sizeEight)

    this.leaderboard = document.createElement('button')
    this.leaderboard.textContent = 'leaderboard'
    this.leaderboard.classList.add('btn')
    document.body.prepend(this.leaderboard)

    this.save = document.createElement('button')
    this.save.textContent = 'save'
    this.save.classList.add('btn')
    document.body.prepend(this.save)

    this.stop = document.createElement('button')
    this.stop.setAttribute('id', 'stop')
    this.stop.classList.add('btn')
    this.stop.textContent = 'stop'
    document.body.prepend(this.stop)

    this.start = document.createElement('button')
    this.start.classList.add('btn')
    this.start.textContent = 'mix and start'
    document.body.prepend(this.start)

    this.count = document.createElement('div')
    this.count.classList.add('infoNum')
    this.count.textContent = `Count: ${this.countMove}`
    document.body.prepend(this.count)

    this.timer = document.createElement('div')
    this.timer.classList.add('infoNum')
    this.timer.textContent = 'TIME'
    document.body.prepend(this.timer)

    this.leaderboardTable = document.createElement('div')
    this.leaderboardTable.setAttribute('id', 'leaderboardTable')
    document.body.prepend(this.leaderboardTable)
    this.buttonLeadereOk = document.createElement('button')
    this.buttonLeadereOk.textContent = 'Close'
    this.buttonLeadereOk.setAttribute('id', 'buttonLeadereOk')
    this.buttonLeadereOk.classList.add('btnMessage')
    document.body.append(this.buttonLeadereOk)
  }
}

window.onload = function () {
    const game = new Fifteen();
    game.createDOM();
  };