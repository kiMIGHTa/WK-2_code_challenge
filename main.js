fetch('http://localhost:3000/characters')
.then((response)=>response.json())
.then((json)=>post(json))

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

function post(characters){
    //create an image element for our cute animals
    var content=document.querySelector('div')
    let divContent=document.createElement('div')

    let img=document.createElement('img')
    img.src="https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif"
    divContent.appendChild(img)
    content.appendChild(divContent)

    //create a like button
   var btn=document.createElement('button')
   btn.id='likeButton'
   btn.innerHTML = 'Like'

   divContent.appendChild(btn)
   btn.addEventListener('click',function (){
    let votes = 0
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
        
    
    

    

}

// post()

document.addEventListener('DOMContentLoaded', function(){
    post()
})