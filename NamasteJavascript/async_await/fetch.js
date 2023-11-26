async function fetchTest(){

    const data= await fetch("https://api.github.com/users/Suraj-jha");
    const jsonvalue = await data.json();
    console.log(jsonvalue);
    console.log("hello..........");
}

fetchTest();
console.log("hello");