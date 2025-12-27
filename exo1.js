let button = document.getElementById('chngerColor').addEventListener('click', () => {
    document.getElementById('change_Style').style.backgroundColor = "red"
})

  let buttonAfiche = document.getElementById('buttonAficher').addEventListener('click', () => {
            document.getElementById('text').style.display = "block";
        })
        let buttonMasquer = document.getElementById('buttonMasquer').addEventListener('click', () => {
            document.getElementById('text').style.display = " none";
        })

 const soumettre = document.getElementById('soumettre');
let Name= document.getElementById('username');
let email = document.getElementById('emaile');
const emailError = document.getElementById('emailError');
const namelError = document.getElementById('nameError');



function isvalidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
soumettre.addEventListener('click',()=>{
    let inputEmail=email.value;
    let inputeName=Name.value;
    if(inputeName===""){
        namelError.textContent="veullez entre votre nome";
    }
    if(inputEmail===""){
        emailError.textContent="veuller entre votre Emaile";
    }else if(!isvalidEmail(inputEmail)){
emailError.textContent="Email n'est pas valide";
}
}) ;
const buttons = document.querySelectorAll('input[type="button"]');
let expression = "";
let afichresult = document.getElementById('afichageResultat');
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.value;
        if (val === "=") {
            try {
                expression = eval(expression);
            } catch {
                expression = "EREOR";

            }
        } else if (val === "C") {
            expression = "";
        } else {
            expression += val;
        }
        afichresult.value = expression;
    })
})




const suivant = document.getElementById('suivant');
const precedent = document.getElementById('precedent');

let i = 1;

suivant.addEventListener('click', () => {
    let image = document.getElementById('images');
    i++;
    if (i < 4) {
        image.src = `img${i}.png`;
    } else {
        i = 1;
        image.src = `img${i}.png`;
    }

});

precedent.addEventListener('click', () => {
    let image = document.getElementById('images');
    i--;
    if (i > 0) {

        image.src = `img${i}.png`;
    } else {
        i = 3;
        image.src = `img${i}.png`;
    }
});


document.getElementById('timer')
let j=0;
setInterval(()=>{
   j++; 
document.getElementById('timer').innerHTML=`${j}`;

},1000);




 const div2=document.getElementById('div2');
 div2.addEventListener('mouseenter',()=>{
div2.style.background="green";
 });
  div2.addEventListener('mouseleave',()=>{
div2.style.background="";
 });

  const div1=document.getElementById('div1');
 div1.addEventListener('mouseenter',()=>{
div1.classList.add('div11');
 });
  div1.addEventListener('mouseleave',()=>{
div1.classList.remove('div11');
 });

 
const Ajouter = document.getElementById('Ajouter');


var ListTache = document.getElementById('ListTach');
Ajouter.addEventListener('click', () => {
    let textInput = document.getElementById('textInput');

    let textTOAdd = textInput.value.trim();
    if (textTOAdd !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<div id="divTache">
        <h4 class="task_text">${textTOAdd}</h4>
        <button class="suprimButton">suprimer</button>
        <button class="modifierButton">modifer</button>
        </div>`;
        ListTache.appendChild(li);
        textInput.value = "";

    }




});
ListTache.addEventListener('click', (e) => {
    if (e.target.classList.contains("suprimButton")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("modifierButton")) {
        const h4 = e.target.parentElement.querySelector(".task_text");
        textInput.value = h4.textContent;
        e.target.closest("li").remove();
    }
});



 function Ouvrire(){
      document.getElementById('modal').style.display="block";
 }
 function Fermer(){
      document.getElementById('modal').style.display="none";
 }

 document.getElementById('recherche').addEventListener('input', () => {
    let textRecher = document.getElementById('recherche').value.toLowerCase();
    let produits = document.querySelectorAll('.produit ul li');

    produits.forEach(elm => {
        let nomProduit = elm.innerText.toLowerCase();
        if (nomProduit.includes(textRecher)) {
            elm.style.display = "block";
        } else {
            elm.style.display = "none";
        }
    });
});


let  container=document.getElementById('container');
for(let i=1;i<5;i++){
let divv=document.createElement('div');
divv.textContent="div"+i;
divv.style.border="1px solid black";
divv.style.margin="5px";
divv.style.padding="10px"
divv.style.backgroundColor="aqua";
container.appendChild(divv);
}
container.style.display="grid";
container.style.gap="20px";
container.style.padding="20px";



window.addEventListener('resize',()=>{
    let widthActual=window.innerWidth;
  
    if(widthActual>750){
        container.style.gridTemplateColumns="1fr 1fr";

    }else{
        container.style.gridTemplateColumns="1fr"
    }

});


document.getElementById('starProgression').addEventListener('click',()=>{
let Animationbar=document.getElementById('barPAnimation');
 let width = 0;

  let interval = setInterval(() => {
    if (width >= 100) {      
      clearInterval(interval);
    } else {
      width += 5;           
      Animationbar.style.width = width + "%"; 
    }
  }, 500);
});

const elements = document.querySelectorAll(".element");
const div22 = document.getElementById("div22");


elements.forEach(el => {
  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", e.target.id); 
  });
});


div22.addEventListener("dragover", e => e.preventDefault());


div22.addEventListener("drop", e => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");
  const el = document.getElementById(id);
  div22.appendChild(el); 

  
});

const chand_mod = document.getElementById('mod_style');
const textButton = document.getElementById('mod_txt');
chand_mod.addEventListener('click', () => {
    document.body.classList.toggle("somber_mod");
    if (document.body.classList.contains("somber_mod")) {
        localStorage.setItem('mode', 'sombre')
        textButton.textContent = "clair mode"
    } else {
        localStorage.setItem('mode', 'clair')
        textButton.textContent = "somber mode"
    }

});

window.addEventListener('load', () => {
    const mod = localStorage.getItem('mode');
    if (mod === 'sombre') {
        document.body.classList.add('somber_mod');
        textButton.textContent = "clair mode";
    } else {
        document.body.classList.remove('somber_mod');
        textButton.textContent = "somber mode";
    }

});
