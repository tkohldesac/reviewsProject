// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// Set the button constants
const prevButton = document.getElementById("prev-btn")
const nextButton = document.getElementById("next-btn")
const randomButton = document.getElementById("random-btn")

// Set the current id number. This will change all of the items and is a reference to const reviews above. This will (hopefully) be all I need to change to change everything when all is said and done.
var currentUser = 0;
// Initialize values to first person in reviews.
changeStuff();

// Buttons below, these change 'currentUser' to either +1 for next, -1 for previous or a random number between 1 and 4 for random. 
prevButton.addEventListener('click', function () {
  
  if (currentUser <= 3 && currentUser != 0) {
    currentUser -= 1;    
  } else if (currentUser == 0) {
   currentUser = 3;
  }
  changeStuff();
})
nextButton.addEventListener('click', function () {
  
  if (currentUser < 3 && currentUser != 4) {
    currentUser += 1;    
  } else if (currentUser == 3) {
   currentUser = 0;
  }
  changeStuff();
})
randomButton.addEventListener('click', function () {
  currentUser = Math.floor(Math.random()*4)
  changeStuff();
})

// This changes everything in the code to match the current person in the currentUser variable.
function changeStuff() {
  document.getElementById("person-img").src = reviews[currentUser].img
  document.getElementById("author").innerText = reviews[currentUser].name
  document.getElementById("job").innerText = reviews[currentUser].job
  document.getElementById("info").innerText = reviews[currentUser].text
}

