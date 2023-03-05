export function acctiveButton(classNonActive,activeClass){
const btns = Document.getElementsByClassName("classNonActive");
console.log(btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("activeClass");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeClass", "");
    }

    // Add the active class to the current/clicked button
    this.className += " activeClass";
  });
}
}
