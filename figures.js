//Square code

function squarePerimeter (side){
    return side * 4;
}

function squareArea (side){
    return side * side;
}

//Triangle code

function triangleHeight(side1, side2, base){
    if(side1 === side2 && side1 != base){
        return Math.sqrt((side1 * side2) - ((base / 2) * (base / 2)));         
    }
    else{
        alert("This is not an isoceles triangle");
    }
}


triangleHeight(8, 8, 4);



function trianglePerimeter(side1, side2, base){
    return parseFloat(side1) + parseFloat(side2) + parseFloat(base);
}

function triangleArea(base, height){
    return (base * height) / 2;
}


//Circle code

function circleDiameter(radius){
    return radius * 2;
}

const PI = Math.PI;
console.log("The PI valor is: " + PI);

function circlePerimeter(radius){
    const diameter = circleDiameter(radius);
    return diameter * PI;
}

function circleArea (radius){
    return PI * (radius * radius);
}

//Interaction with HTML

//Square interaction

function calculateSquarePerimeter(){
    const input = document.getElementById("inputSquare");
    const side = input.value;
    const perimeter = squarePerimeter(side).toFixed(2);

    alert(perimeter);
}

function calculateSquareArea(){
    const input = document.getElementById("inputSquare");
    const side = input.value;
    const area = squareArea (side).toFixed(2);

    alert(area);

}

//Triangle interaction

function calculateTrianglePerimeter(){
    const input1 = document.getElementById("inputTriangleSide1");
    const side1 = input1.value;
    const input2 = document.getElementById("inputTriangleSide2");
    const side2 = input2.value;
    const input3 = document.getElementById("inputTriangleBase")
    const base = input3.value;

    const perimeter = trianglePerimeter(side1, side2, base).toFixed(2);

    alert(perimeter);
}

function calculateTriangleArea(){

    const input1 = document.getElementById("inputTriangleSide1");
    const side1 = input1.value;

    const input2 = document.getElementById("inputTriangleSide2");
    const side2 = input2.value;

    const input3 = document.getElementById("inputTriangleBase")
    const base = input3.value;

    const height = triangleHeight(side1, side2, base);

    const area= triangleArea(base, height).toFixed(2);
  
    if(area > 0){
        alert(area);
    }
}

//Circle interaction

function calculateCirclePerimeter(){
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const perimeter = circlePerimeter(value).toFixed(2);

    alert(perimeter);

}

function calculateCircleArea(){
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const area= circleArea(value).toFixed(2);

    alert(area);
}
