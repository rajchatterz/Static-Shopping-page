let url = 'https://fakestoreapi.com/products/1'
let url2 = 'https://fakestoreapi.com/products/2'
let url3 = 'https://fakestoreapi.com/products/3'
let url4 = 'https://fakestoreapi.com/products/4'
let url5 = 'https://fakestoreapi.com/products/5'
let url6 = 'https://fakestoreapi.com/products/6'
let url7 = 'https://fakestoreapi.com/products/7'
let url8 = 'https://fakestoreapi.com/products/8'
let image = document.querySelector(".image1")
let des1 = document.getElementById("desc1")
let price1 = document.getElementById("price1")
let image2 = document.querySelector(".image2")
let des2 = document.getElementById("desc2")
let price2 = document.getElementById("price2")
let image3 = document.querySelector(".image3")
let des3 = document.getElementById("desc3")
let price3 = document.getElementById("price3")
let image4 = document.querySelector(".image4")
let des4 = document.getElementById("desc4")
let price4 = document.getElementById("price4")
let image5 = document.querySelector(".image5")
let des5 = document.getElementById("desc5")
let price5 = document.getElementById("price5")
let image6 = document.querySelector(".image6")
let des6 = document.getElementById("desc6")
let price6 = document.getElementById("price6")
let image7 = document.querySelector(".image7")
let des7 = document.getElementById("desc7")
let price7 = document.getElementById("price7")
let image8 = document.querySelector(".image8")
let des8 = document.getElementById("desc8")
let price8 = document.getElementById("price2")
let createImage = document.createElement("img")
let createImage2 = document.createElement("img")
let createImage3 = document.createElement("img")
let createImage4 = document.createElement("img")
let createImage5 = document.createElement("img")
let createImage6 = document.createElement("img")
let createImage7 = document.createElement("img")
let createImage8 = document.createElement("img")
fetch(url).then(response=>response.json()).then((data)=>{
    createImage.src=data.image
    des1.innerHTML=data.title.slice(0,20)
    price1.innerHTML=data.price
    image.appendChild(createImage)
   
})
fetch(url2).then(response=>response.json()).then((data)=>{
    
    createImage2.src=data.image
    des2.innerHTML=data.title.slice(0,20)
    price2.innerHTML=data.price
    image2.appendChild(createImage2)
   
})
fetch(url3).then(response=>response.json()).then((data)=>{
    
    createImage3.src=data.image
    des3.innerHTML=data.title.slice(0,20)
    price3.innerHTML=data.price
    image3.appendChild(createImage3)
   
})
fetch(url4).then(response=>response.json()).then((data)=>{
    
    createImage4.src=data.image
    des4.innerHTML=data.title.slice(0,20)
    price4.innerHTML=data.price
    image4.appendChild(createImage4)
   
})
fetch(url5).then(response=>response.json()).then((data)=>{
    
    createImage5.src=data.image
    des5.innerHTML=data.title.slice(0,20)
    price5.innerHTML=data.price
    image5.appendChild(createImage5)
   
})
fetch(url6).then(response=>response.json()).then((data)=>{
    
    createImage6.src=data.image
    des6.innerHTML=data.title.slice(0,20)
    price6.innerHTML=data.price
    image6.appendChild(createImage6)
   
})
fetch(url7).then(response=>response.json()).then((data)=>{
    
    createImage7.src=data.image
    des7.innerHTML=data.title.slice(0,20)
    price7.innerHTML=data.price
    image7.appendChild(createImage7)
   
})
fetch(url8).then(response=>response.json()).then((data)=>{
    
    createImage8.src=data.image
    des8.innerHTML=data.title.slice(0,20)
    price8.innerHTML=data.price
    image8.appendChild(createImage8)
   
})