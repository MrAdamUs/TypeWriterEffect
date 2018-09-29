const TypeWriter = function(txtElement, words, wait = 3000) {
   this.txtElement = txtElement;
   this.words = words;
   this.txt = '';
   this.wordIndex = 0;
   this.wait = parseInt(wait, 10);
   this.type();
   this.isDeleting - false;
}

// Type Method 
  TypeWriter.prototype.type = function(){
       //   console.log('hello')
    // Current index of word
    const Current = this.wordIndex & this.words.length;
       // console.log(Current)
    // Get full text of current word
    const fulltxt = this.words[Current];
      //  console.log(fulltxt);
    // Check if deleting
    if(this.isDeleting){
          // Remove char
          this.txt = fulltxt.substring(0, this.txt.length - 1);
    }else {
         // Add char
         this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
        // console.log(this.txt);
    // Insert txt in to element
    this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;

    // Initial Type Speed 
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fulltxt) {
        // Make pause at end
        typeSpeed = this.wait;

        // Set delete is true
        this.isDeleting = true;


    } else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;

        // move to the next word
        this.wordIndex++;

        // pause befor start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
  }
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);


//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWritter
    new TypeWriter(txtElement, words, wait)
}


// ES6 Class

// class TypeWriter {
//     constructor(txtElement, words, wait = 3000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting - false;
//     }

//                 type() {
//                         //   console.log('hello')
//                 // Current index of word
//                 const Current = this.wordIndex & this.words.length;
//                 // console.log(Current)
//             // Get full text of current word
//             const fulltxt = this.words[Current];
//             //  console.log(fulltxt);
//             // Check if deleting
//             if(this.isDeleting){
//                 // Remove char
//                 this.txt = fulltxt.substring(0, this.txt.length - 1);
//             }else {
//                 // Add char
//                 this.txt = fulltxt.substring(0, this.txt.length + 1);
//             }
//                 // console.log(this.txt);
//             // Insert txt in to element
//             this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;

//             // Initial Type Speed 
//             let typeSpeed = 300;

//             if(this.isDeleting) {
//                 typeSpeed /= 2;
//             }

//             // If word is complete
//             if(!this.isDeleting && this.txt === fulltxt) {
//                 // Make pause at end
//                 typeSpeed = this.wait;

//                 // Set delete is true
//                 this.isDeleting = true;


//             } else if (this.isDeleting && this.txt === ''){
//                 this.isDeleting = false;

//                 // move to the next word
//                 this.wordIndex++;

//                 // pause befor start typing
//                 typeSpeed = 500;
//             }

//             setTimeout(() => this.type(), typeSpeed);

//      }
// }

// // Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);


// //Init App
// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Init TypeWritter
//     new TypeWriter(txtElement, words, wait)
// }