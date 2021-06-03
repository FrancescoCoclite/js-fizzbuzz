for (var i = 1; i <= 100; i++){

    if (i % 3 == 0 &&  i % 5 == 0 && i % 6 == 0){
    console.log(i + 'FizzBuzzBoolean');
    }
    else if (i % 3 == 0 && i % 6 == 0 ){
        console.log(i + 'FizzBoolean');
    }   
    else if (i % 5 == 0 && i % 6 == 0 ){
        console.log(i + 'BuzzBoolean');
    }
    else if (i % 3 == 0 ){
     console.log(i + 'Fizz');
    }
    else if (i % 5 == 0){
        console.log(i + 'Buzz');
    }
    else{
        console.log(i);
    }
}