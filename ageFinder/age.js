function finder(){
    var BY = document.getElementById("year");
    var age = 2023 - BY.value; 

    console.log(age);
    document.getElementById("answer").innerHTML = age;
}