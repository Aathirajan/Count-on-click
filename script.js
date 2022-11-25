// let reddiv = document.getElementById('red')

// let yellowdiv = document.getElementById('yellow')
// let greendiv = document.getElementById('green')

// reddiv.onclick= ()=> console.log('red')
// yellowdiv.onclick= ()=>console.log('yellow')
// greendiv.onclick= ()=>console.log('green')
// Practice hard 
// let buttons = document.querySelectorAll('.Squarebutton')

// const timesClicked={red:0, yellow:0,green:0}

// buttons.forEach(i=>{
//   i.onclick = () => {
//     timesClicked[i.value]+=1
//     i.innerText=timesClicked[i.value]

//   }
// })

// const clearscores=()=>


let buttons = document.querySelectorAll('.Squarebutton')
let timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
buttons.forEach(button => {
    button.onclick = () => {
        timesClicked[button.value] += 1;
        button.innerText = timesClicked[button.value]
    }

})

let clear = document.getElementById('clearScores')

let clearScores = () => {
    buttons.forEach(button => {
        button.innerText = ' '
    })

}
clear.onclick = () => clearScores()