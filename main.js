fetch('http://localhost:3000/characters')
.then((response)=>response.json())
.then((json)=>post(json))

// function renderCharacters(characters){
//     console.log(characters)

//     characters.forEach((character)=>console.log(character["name"]))


// }

function post(character){
    character.forEach((character) =>{
    
    //create an image element for our cute animals
    let content=document.querySelector('div')
    let divContent=document.createElement('div')
    divContent.id="1"

    let img=document.createElement('img')
    img.src = character.image
    divContent.appendChild(img)

    //create a like button
   var btn=document.createElement('button')
   btn.id='likeButton'
   btn.innerHTML = 'Like'

   divContent.appendChild(btn)
   btn.addEventListener('click',function (){
    let votes = character.votes
    let isLiked=false
    if(isLiked){
    votes--
    }else{
        votes++
        btn.innerHTML = 'Liked!'
    }
    // votes++
    // btn.innerHTML = 'Liked!'
    // // btn.disabled = true

    isLiked = !isLiked
    console.log(`LikeCount: ${votes}`)
   })
        
content.appendChild(divContent)

    
    

    
    }
)}

// // post()

// document.addEventListener('DOMContentLoaded', function(){
//     renderCharacters()
// })