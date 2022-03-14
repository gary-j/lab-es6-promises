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
// ...

// Bonus 2 - Promise all
// ...