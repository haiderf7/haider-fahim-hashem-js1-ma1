const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];




// Question 1

function complain(cat) {
    console.log(cat);
}

complain("Meow!");


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3:

heading.style.fontSize = "2em";



// Question 4:

heading.classList.add("subheading");


// Question 5:

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.querySelector("p").style.backgroundColor = "yellow";


// Question 7: forTheCat

function forTheCat(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
forTheCat(cats);


// Question 8


function creationOfCats(cats) {
    let catName = "";
    let catAge = "";
    let newHTML = "";

    for (let i = 0; i < cats.length; i++) {

        catName = `<h5>${cats[i].name}</h5>`;

        if (cats[i].age) {
            catAge = `<p>${cats[i].age}</p>`;
        } else {
            catAge = "Age unknown";
        }

        newHTML += `<div>
                        ${catName}
                        ${catAge}
                    </div>`;
    }
    return newHTML;
}

const newHTML = creationOfCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;