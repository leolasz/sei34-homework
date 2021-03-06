console.log("bye");

// ## Warmup - Serge Says
//
// ## Examples
// * Serge answers 'Sure.' if you ask him a question.
//
// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// * He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// * He answers 'Whatever.' to anything else.
//
// * Create a function that takes an input and returns Serge's response.

//create a function that takes in a string and returns a different response depending if it's a
//question,  all caps,  empty string, or anything else

const sergeSays = function( input ){
  // let response = "";

  if( input.endsWith('?')){
    return "sure";
  }else if (input.length === 0){
    return "fine be that way";
  }else if ( input === input.toUpperCase() ){
    return "Whoa, chill out";
  }else{
    return "whatever";
  }



  // return response;
};

console.log("How are you?:", sergeSays("How are you?"));
console.log("Hello:", sergeSays("Hello"));
console.log("I LOVE JS:", sergeSays("I LOVE JS"));
console.log("Empty string:", sergeSays(""));
