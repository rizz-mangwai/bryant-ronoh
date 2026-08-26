const requestOptions = {
  method: "GET",
  redirect: "follow"
};
let flow = "this flow";
let result = fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json ())
  .then((result) =>{
    console.log("line 34"); 
    flow = "updated flow"
    console.log("type of result", typeof result);
});
console.log(result);