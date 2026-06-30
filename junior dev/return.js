function sayMyName() {
    let first_name = "Samson";     // statement 1
    console.log(`First Name ${first_name}`)
      // statement 2

    let second_name = "Johanna"; 
     // statement 3
    console.log(`Second Name ${second_name}`);
    
     // statement 4

    let full_name = `${first_name} ${second_name}`;  // statement 5
    console.log(`Names are ${full_name}`); 
    
    return true // statement 6
}

let sayMyNameValue = sayMyName();

console.log(` ${sayMyNameValue}`);

/*
    scenario 1:
    Leave it as it is and look at the results.
    -what happens

    scenario 2: after the second statement inside the function
    put a return.
    -what happens (exists the function exactly where the return statement is)

    scenario 3: after the fourth statement inside the function
    put a return.
    -what happens (exits the function exactly where the return statement is)

    scenario 4: put a return statement anywhere inside your function and return
    a string of your choice

    scenario 5: put a return statement anywhere inside your function and return
    a number of your choice

    scenario 6: put a return statement anywhere inside your function and return
    a boolean of your choice
*/