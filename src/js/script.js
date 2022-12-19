let temp1 = [
    {
        type: "pant",
        src: "images/bagi.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    },
    {
        type: "pant",
        src: "images/muha.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    },
    {
        type: "pant",
        src: "images/muha.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    },
    {
        type: "pant",
        src: "images/muha.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    },
    {
        type: "pant",
        src: "images/sdu.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    },
    {
        type: "pant",
        src: "images/maha_wanted.jpg",
        name: "Double Knee Lose-Fit",
        price: "1235"
    }
]

for( let i = 0; i < temp1.length; i++ ) {
    console.log(temp1[i].image)
}

let arr = document.querySelectorAll("div div section div div div img")
for( let i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
}
myfunction()

function myfunction() {
    for( let i = 0; i < arr.length; i++ ) {
        arr[i].src = temp1[i].image
    }
}