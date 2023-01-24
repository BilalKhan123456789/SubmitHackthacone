var div = document.getElementById("div")
var key =localStorage.getItem("key")
console.log(key)

firebase.database().ref(`Dishes/`).once("value",(snap)=>{
var convert =snap.toJSON()

console.log(convert)

if(convert!=null){
    var value =Object.values(convert)

value.map((v,i)=>{
  console.log(v.imgUrl)
div.innerHTML+=`


<div class="col col-lg-3 col-md-4 col-sm-6 col-12"
<div class="card" style="width:400px;">
<div class="card" style="width: 18rem;">
  <img src="${v.imgUrl}" class="card-img-top" alt="." style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${v. Dish_Name}</h5>
    <p class="card-text">${"Price :  " + v.Price} <br> ${"Quality : " + v.qty}</p>
    <a href="#" class="btn btn-primary">Order</a>

    </div>
</div></div>        

`


})



}

})








