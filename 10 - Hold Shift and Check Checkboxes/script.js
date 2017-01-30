const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; // last checkbox that was clicked

function handleCheck(e) {
    //check if shift key down
    // and check the click "checked" the box
    let inBetween = false;
    if(e.shiftKey && this.checked) {
      //loop over every single check box
      checkboxes.forEach(checkbox => {
         if(checkbox === this || checkbox === lastChecked) {
             inBetween = !inBetween;
             console.log("start of in between checks!");
         } 
         if(inBetween) {
             checkbox.checked = true;
         } 
      });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));