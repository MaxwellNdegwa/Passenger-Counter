//document.getElementById("count-el").innerText = 5

// initialize thr count as 0
// listen for clicks on the increment button when clicked
// increment the count variable whne button is clicked
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el")
// console.log(countEl)

let count = 0;

let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
} 

function decrement() {
    count -= 1
    countEl.innerText = count
    console.log(count)
}

// textContent gets the contents of all elements including <script> and <style> elements, in contrast, innerText only shows humman-readable elements thus won't show hidden elements such as spaces. 

function save() {
    entry = count + " , "
    saveEl.textContent += entry
    countEl.innerText = 0
    count = 0
}


let myPoints = 3;

function add3Points() {
    myPoints += 3   
}

add3Points()
add3Points()
add3Points()

function remove1Point() {
    myPoints -= 1
}

remove1Point()
remove1Point()

console.log(myPoints)




 