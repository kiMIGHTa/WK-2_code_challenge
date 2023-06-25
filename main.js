fetch('http://localhost:3000/characters')
.then((response)=>response.json())
.then((json)=>post(json))




// function renderCharacters(characters){
//     console.log(characters)

//     characters.forEach((character)=>console.log(character["name"]))


// }

function post(characters){
    characters.forEach((character) =>{
    
    //create an image element for our cute animals
    let content=document.getElementById('content')
    let divContent=document.createElement('div')
    divContent.className="post"
    

    let img=document.createElement('img')
    img.src = character.image
    divContent.appendChild(img)

    //create a like button
   var btn=document.createElement('button')
   btn.id='likeButton'
   btn.innerHTML = 'Like'

   divContent.appendChild(btn)
   btn.addEventListener('click',function (){
    let characterName = character.name
    let votes = character.votes
    if(character.votes === 0){
         votes++
         btn.innerHTML = 'Liked!'
         character.votes++
         btn.style.backgroundColor = "red"
    }else if(character.votes > 0){
        votes--
        btn.innerHTML = 'like'
        character.votes--
        btn.style.backgroundColor = "white"
        btn.style.color = "black"


    }

    // votes++
    // btn.innerHTML = 'Liked!'
    // // btn.disabled = true

    console.log(`${characterName} LikeCount: ${votes}`)
    characters.forEach((character)=> console.log(character) )

   })

   
        
content.appendChild(divContent)
})

}



// // post()

// document.addEventListener('DOMContentLoaded', function(){
//     renderCharacters()
// }