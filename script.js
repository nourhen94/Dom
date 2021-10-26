console.log(document);
var plusbtn= document.querySelectorAll('.plus');
var prices = document.querySelectorAll('.price');
var unitPrice = document.querySelectorAll('.unitePrice');


for (let i = 0; i < plusbtn.length; i++) {
    plusbtn[i].addEventListener('click',increement)
    
};



function increement(event){
    var test = event.target;
    var parent = test.parentElement;
    var quant=Number(parent.querySelector('p').innerHTML);
    quant++;
   parent.querySelector('p').innerHTML=quant;

   var grandparent = parent.parentElement;
   var tab = grandparent.parentElement;
   var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
   var pce = quant*uprc;
   tab.querySelector('.price').innerHTML = pce
   total()
   }
    





var minusbtn= document.querySelectorAll('.minus');

for (let i = 0; i < minusbtn.length; i++) {
    minusbtn[i].addEventListener('click',decreement)
    
}

function decreement(event){
    var test = event.target;
    var parent = test.parentElement;
    var quant=Number(parent.querySelector('p').innerHTML);
    quant--;
    parent.querySelector('p').innerHTML=quant;

    
    
    if(quant<0){
        quant=0;
        parent.querySelector('p').innerHTML = quant;
      }
      else{
      parent.querySelector('p').innerHTML = quant
      }

    var grandparent = parent.parentElement;
    var tab = grandparent.parentElement;
    var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
    var pce = quant*uprc;
    tab.querySelector('.price').innerHTML = pce
    total()
    

}


var likeBotton = document.getElementsByClassName('like');
for(var i=0;i<likeBotton.length;i++){
    var bottonLike =likeBotton[i]
    bottonLike.addEventListener('click',function(e){
            var botton=e.target;
             if(botton.style.color=='red'){
                 botton.style.color= "#424242";
             }else{
                botton.style.color='red';}

        })
}

var btndel = document.querySelectorAll('.delete')
for (let i = 0; i < btndel.length; i++) {
  btndel[i].addEventListener('click',dlt) 
};
function dlt(event){
var quant= event.target
var parent = quant.closest("tr")
var del1 = Number(parent.querySelector('.price').innerHTML)
del1 = 0
parent.querySelector('.price').innerHTML = del1
parent.querySelector('p').innerHTML = 0
total()
};


function total(){
    var tot = 0;
    for (let i = 0; i < prices.length; i++) {

    
     tot+=Number(prices[i].innerHTML);
     
    
    document.querySelector('#total').innerHTML=tot;
     }
     }
