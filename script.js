function checkLog(){

    var username=document.login.username.value;
    username=username.toLowerCase();
    //document.write(username);
    var password=document.login.password.value;
    password=password.toLowerCase();
    //document.write(password);
    if (username== "admin" && password=="admin"){
        document.write("Log In Succeed");
        

    }
}

function fareCalculation(){
    var distance=parseInt(document.fees.distance.value);
    //document.write(distance);
    var fare=distance*5.540*30;
    alert("Bus Fare:"+fare+"Taka");

}

function mealCalculation(){
    var meal=parseInt(document.fees.meal.value);
    //document.write(distance);
    var meal_amount=meal*22;
    alert("Total Meal  Price:"+meal_amount+"Taka");

}

function addFee(){

    alert("Addmission Fee is 1250/- Tk Only");
}

function readdFee(){

    alert("Readdmission Fee is 350/- Tk Only");
}