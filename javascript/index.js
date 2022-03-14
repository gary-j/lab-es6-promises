// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks

 getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;

          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));

// ...

// Iteration 2 - using promises
// for(let i = 0; i<steak.length; i++){
  let leSteak = document.querySelector("#steak")
  obtainInstruction("steak", 0).then((instruction)=>{
  leSteak.innerHTML += `<li>${instruction}</li>`;
  return obtainInstruction('steak', 1);
  }
  ).then(
    (instruction)=>{
    leSteak.innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 2);
    }).then(
      (instruction)=>{
        leSteak.innerHTML += `<li>${instruction}</li>`;
        return obtainInstruction('steak', 3);
      }).then(
        (instruction)=>{
          leSteak.innerHTML += `<li>${instruction}</li>`;
          return obtainInstruction('steak', 4);
        }).then(
          (instruction)=>{
            leSteak.innerHTML += `<li>${instruction}</li>`;
            return obtainInstruction('steak', 5);
          }).then(
            (instruction)=>{
              leSteak.innerHTML += `<li>${instruction}</li>`;
              return obtainInstruction('steak', 7);
            }).then(
              (instruction)=>{
                leSteak.innerHTML += `<li>${instruction}</li>`;
              }).then(
                ()=>leSteak.innerHTML += `<li>Stake is ready!</li>`
                )

// }
// ...

// Iteration 3 using async/await
let leBroccoli = document.querySelector("#broccoli")

async function makeBroccoli(i){
    for(let i = 0; i<broccoli.length; i++){
    // await obtainInstruction('broccoli', 0)
    leBroccoli.innerHTML+= `<li>${await obtainInstruction('broccoli', i)}</li>`
  }
  leBroccoli.innerHTML+=`<li>Broccoli is ready!</li>`;
}

makeBroccoli()


// ...

// Bonus 1 - Remove .hidden class from all images

let allImages = document.querySelectorAll('img');

async function displayImages(){
  allImages.forEach(image => {
    console.log(image, 'IMAGE IMAGE')
    image.removeAttribute('hidden');
  })
}

displayImages()

// Bonus 2 - Promise all
let lesBrussels = document.querySelector('#brusselsSprouts');

let brussels = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)

]

Promise.all(brussels).then( (instruction) =>{
console.log('VALUES');
instruction.forEach(item => {

  lesBrussels.innerHTML += `<li>${item}</li>`
})
lesBrussels.innerHTML+=`<li>Brussels Sprouts are ready !</li>`

}

 );
// ...