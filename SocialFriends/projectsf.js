let friendlist = [{
        profilePic: "ajay.jpg",
        name: "Ajay Devkar",
        about: "If you don’t like something, change it. If you can’t change it, change your attitude",
        image: "ajay.jpg",
        likes: 0,
        totalComment: 1,

        /* birthdate: 13 / 12 / 1996,
        age: 24,
        mobileNo: 7798325001,
        live: "Jalgaon",
         */
    },
    {
        profilePic: "shubhampatil.jpg",

        about: "Skill Make man Perfect",
        image: "shubhampatil.jpg",
        name: "Shubham Patil",
        likes: 0,
        totalComment: 1,

        /*  birthdate: 24 / 10 / 1996,
         age: 24,
         mobileNo: 9545188570,
         live: "Nasik", */
    }, {
        profilePic: "ankitprofile.jpg",
        name: "Ankit Songire",
        about: "Pharmacist",
        image: "ankit.jpg",
        likes: 0,
        totalComment: 1,

        /*         birthdate: 23 / 06 / 1996,
                age: 24,
                mobileNo: 9422235546,
                live: "Bodwad",
         */
    }, {
        profilePic: "pratikprofile.jpg",
        name: "Pratik Shemare",
        about: "Do Smart Work Not a Hard Work",
        image: "pratik.jpg",
        likes: 0,
        totalComment: 1,

        /*  birthdate: 28 / 08 / 1996,
         age: 24,
         mobileNo: 9890460695,
         live: "Pune", */
    },
];

let cnt = [
    "Nice Pic",
    "Rocking",
    "Very Nice",
    "Number One",
]


display(friendlist);

function display(friendlist) {

    let tabledata = "";
    friendlist.forEach(function(list, index) {

        tabledata +=
            `<div class = "storymain" > 
             <div class = "storypost">
            <img src=/home/ajaydevkar/HTMLandCSS/SocialFriends/${list.profilePic} width = "50px" height = "50px" style = "border-radius: 50px; border:1px black solid;">
            <b>${list.name}</b> 
            </div>
            <br/>
            <br/>
            <p class = "p" >${list.about}</p> 
            <p class="image"><img src =${list.image} alt = "image" width = "100%" height = "80%" style = "border:1px solid lightgray;"></p>
            <p class = "like1">${list.likes} likes </p> 
            <p class = "comment1" onclick="commentButton()">${list.totalComment} comments</p> 
            <div class = "buttons">
            <button class = "button1" onclick="likeCount(${index})"> Like </button> 
            <button class = "button2"> Comment </button>

        </div> 
        <p class="comment2"> ${cnt[index]}</p><br/>
    
        <p>
        <form onsubmit="writecommets(event,${index})">
        <input type="text" required class="typecomment" placeholder ="Write a comment..."></input>
        <button class="cmntsubmitbutton"type="submit" >comment</button>
        </form>
        </p>
        <br/>
        </div>`;

    });
    document.getElementsByClassName("div")[0].innerHTML = tabledata;
}



function writecommets(event, index) {
    event.preventDefault();
    let frndlist = friendlist[index];
    console.log(index);
    cnt[index] += document.getElementsByClassName("typecomment")[index].value;
    frndlist.totalComment += 1;
    display(friendlist);

}


function likeCount(index) {
    let frndlist = friendlist[index];
    frndlist.likes += 1;
    display(friendlist);
}




function searchFriends() {
    let result = document.getElementsByClassName("search")[1].value;
    console.log(result);
    let newData = friendlist.filter(function(frndlist) {

        return frndlist.name.toUpperCase().indexOf(result.toUpperCase()) != -1;

    })

    display(newData);
}