fetch('http://localhost:3000/characters')
.then((response)=>response.json())
.then((json)=>renderCharacters(json))

function renderCharacters(characters){
    console.log(characters)
    const main = document.querySelector('div')
    characters.forEach(character=>{
        const p=document.createElement('p')
        p.innerHTML=`${character.id} ${character.name}`
        main.appendChild(p)
    })
    // console.log(characters.name)


}

document.addEventListener('DOMContentLoaded', function(){
    renderCharacters()
})