document.addEventListener('DOMContentLoaded', (e) => {

const monsterContainer = document.querySelector('#monster-container')

let page = 1
const fetchMonsters = () => {

fetch(`http://localhost:3000/monsters?_limit=50&_page=${page}`)
.then(resp => resp.json())
.then(data => { renderMonster(data) 
    // console.log(data)
})

}

function renderMonster (monsters){
    monsterContainer.innerHTML = ""
    monsters.forEach(monster => {
        // console.log(monster)
    const div = document.createElement('div')
    const name = document.createElement('h2')
    const age = document.createElement('h4')
    const description = document.createElement('p')
    name.innerText = monster.name
    age.innerText = "Age:" + monster.age
    description.innerText = monster.description
    monsterContainer.append(div)
    div.append(name, age, description)
     })
}

const handlePage = () => {
    backButton.addEventListener('click', (e) =>{
        console.log(e)
        console.log(page)
        page--
        fetchMonsters()
    })
    forwardButton.addEventListener('click', (e) => {
        console.log(e)
        console.log(page)
        page++
        fetchMonsters()
    })
        
    }

//select the monster display div
//when page loads fetch first 50 monsters from API
//append each monsters age, name, and description to display div
//First Deliverable complete


const createMonsterContainer = document.querySelector('#create-monster')
const form = document.createElement('form')
const nameInput = document.createElement('input')
nameInput.placeholder = "Name: "
const ageInput = document.createElement('input')
ageInput.placeholder ="Age: "
const descriptionInput = document.createElement('input')
descriptionInput.placeholder="Description: "
const button = document.createElement('button')
button.innerText = "Create Monster"
const backButton = document.querySelector('#back')
const forwardButton = document.querySelector('#forward')

createMonsterContainer.append(form)
form.append(nameInput, ageInput, descriptionInput, button)

form.addEventListener('submit', () => {
    e.preventDefault()
    fetch('http://localhost:3000/monsters', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: nameInput.value,
            age: ageInput.value,
            description: descriptionInput.value
        })
    })
    .then(resp => resp.json())
    .then(monsters=> console.log(monsters))
})

    
    
    fetchMonsters()
    handlePage()



//create form to create new monsters
    // have fields for name, age and description, and create monster button
    //when button is clicked should POST our new monster to monsters API




// add event listener to button at end of monster list
//when clicked it should load the next 50 monsters and show them


// Get the list of monsters:

// ```text
// GET http://localhost:3000/monsters

// optional parameters:

// _limit=[number] - limit the number of monsters returned
// _page=[number] - offset your request for monsters to some page (must specify a limit)

// example:

// GET http://localhost:3000/monsters/?_limit=20&_page=3

// sample response:
// [
//   {
//     "name": "Chronos",
//     "age": 4005.302453418598,
//     "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
//     "id": 1
//   },
//   {
//     "name": "Tartarus",
//     "age": 1874.4913565609456,
//     "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
//     "id": 2
//   },
//   {
//     "name": "Hemera",
//     "age": 4094.8375978925988,
//     "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
//     "id": 3
//   }
// ]
// ```

// Create a monster:

// ```text
// POST http://localhost:3000/monsters
// headers:
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// }

// body:
// { name: string, age: number, description: string }
// ```


});