fetch('http://localhost:3000/characters')
.then((response)=>response.json())
.then((json)=>renderCharacters(json))

// function renderCharacters(characters){
//     console.log(characters)
//     const main = document.querySelector('div')
//     characters.forEach(character=>{
//         const p=document.createElement('p')
//         p.innerHTML=`${character.id} ${character.name}`
//         main.appendChild(p)
//     })
//     // console.log(characters.name)


// }

function post(){
    //create an image element for our cute animals
    let content=document.querySelector('div')
    let divContent=document.createElement('div')

    let img=document.createElement('img')
    img.src="https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif"
    divContent.appendChild(img)
    content.appendChild(divContent)

}

document.addEventListener('DOMContentLoaded', function(){
    post()
})