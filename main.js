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
    
    console.log(`${characterName} LikeCount: ${votes}`)
    characters.forEach((character)=> console.log(character) ) 
     })



     let commentSection=document.createElement('div')
     commentSection.className = 'commentSection'
    // Create the form element
    const form = document.createElement('form')
    form.id = `${character.id}'s comment section `
    form.action = ''
    form.method = 'POST'



    // Create the input element
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'new-comment'
    input.name = 'new-comment'
    input.placeholder = 'Add your comment...'

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        addComment(document.getElementById('new-comment').value)
        form.reset()
      })


    form.appendChild(input)
    commentSection.appendChild(form)
    // form.appendChild(submitInput);

    // Create the list container
    const commentContainer = document.createElement('div')
    commentContainer.id = 'comments'

    // Create the heading element
    const heading = document.createElement('h2')
    heading.textContent = 'Comments'

    // Create the unordered list
    let commentList = document.createElement('ul')
    commentList.id = 'individualComment'

    // Append the heading and task list to the list container
    commentContainer.appendChild(heading)
    commentContainer.appendChild(commentList)

    //
    commentSection.appendChild(commentContainer)


    // Append the form and list container to the app container
    // const commentSection = document.createElement('div')
    // commentSection.id = 'commentSection'



    function addComment(comment){
        let item = document.createElement('li')
        item.textContent=`${comment}  `
      
        let btn = document.createElement('button')
        btn.textContent = 'x'
        btn.addEventListener('click', deletesComment)
      
        item.appendChild(btn)
        commentList.appendChild(item)
      
      }
      function deletesComment(event){
        event.target.parentNode.remove()
      
      }
     content.appendChild(divContent)
     content.appendChild(commentSection)
    })

}



// // post()

// document.addEventListener('DOMContentLoaded', function(){
//     renderCharacters()
// })