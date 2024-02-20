const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.getElementById("body")

function renderPost(){
    for(let i = 0; i < posts.length; i++){
        const postSection = posts[i]
        
        // create new elements and assign the corresponding class name and value
        // create a new section with the class name "post-section"
        let newSectionEl = document.createElement("section")
        newSectionEl.classList.add("post-section")
        
        // create the container div and the div of the profile pic section
        let newDivEl = document.createElement("div")
        newDivEl.classList.add("container")
        let secondDivEl = document.createElement("div")
        secondDivEl.classList.add("profile-pic-section")
        
        let imageEl = document.createElement("img")
        imageEl.classList.add("profile-picture")
        imageEl.src = `${postSection.avatar}`
        secondDivEl.append(imageEl)
        
        let locationDivEl = document.createElement("div")
        let nameEl = document.createElement("p")
        let locationEl = document.createElement("p")
        
        nameEl.classList.add("name")
        locationEl.classList.add("location")
        
        nameEl.textContent = `${postSection.name}` 
        locationEl.textContent = `${postSection.location}`
        
        locationDivEl.append(nameEl)
        locationDivEl.append(locationEl)
        secondDivEl.append(locationDivEl)
        newDivEl.append(secondDivEl)
        
        
        let postImageEl = document.createElement("img")
        postImageEl.classList.add("post")
        postImageEl.src = `${postSection.post}`
        newDivEl.append(postImageEl)
        
        let iconDivEl = document.createElement("div")
        iconDivEl.classList.add("icons")
        
       let heartIconEl = document.createElement("img")
       heartIconEl.classList.add("heart-icon")
       
       let commentIconEl = document.createElement("img")
       commentIconEl.classList.add("comment-icon")
       
       let dmIconEl = document.createElement("img")
       dmIconEl.classList.add("dm-icon")
       
       heartIconEl.src = "images/icon-heart.png"
       commentIconEl.src = "images/icon-comment.png"
       dmIconEl.src = "images/icon-dm.png"
       
       iconDivEl.append(heartIconEl)
       iconDivEl.append(commentIconEl)
       iconDivEl.append(dmIconEl)
       
       newDivEl.append(iconDivEl)
       
       let likesEl = document.createElement("p")
       let commentEl = document.createElement("p")
       
       likesEl.classList.add("likes")
       commentEl.classList.add("comment")
       
       likesEl.textContent = `${postSection.likes} likes`
       commentEl.innerHTML = `<span class="username"> ${postSection.username} </span> ${postSection.comment}`
       
       newDivEl.append(likesEl)
       newDivEl.append(commentEl)
        
       // append everything to the new section element and then append it to the body element
       newSectionEl.append(newDivEl)
       body.append(newSectionEl)
    }
}

renderPost()
