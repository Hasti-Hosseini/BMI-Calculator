function calculator() {
    let h=document.getElementById('height').valueAsNumber;
    let w=document.getElementById('weight').valueAsNumber;
    let bmi=(w/[(h*0.01)*(h*0.01)]);
    let rbmi=document.createTextNode(Math.round(bmi*10)/10);
    let f= document.getElementById('final');
    let warning= document.getElementById('warn');
    f.replaceChildren(rbmi);
    if(bmi < 18.5) {
        f.appendChild(document.createTextNode(' Underweight'));
    }
    else if(18.5<=bmi && bmi<24.9){
        f.appendChild(document.createTextNode(' Normal weight'));
    }
    else if(25<=bmi && bmi<29.9){
        console.log(bmi)
        f.appendChild(document.createTextNode(' Overweight'));
    }
    else if(30<=bmi && bmi<34.9){
        f.appendChild(document.createTextNode(' Obesity class I'));
    }
    else if(35<=bmi && bmi<39.9){
        f.appendChild(document.createTextNode(' Obesity class II'));
    }
    else if(40<=bmi){
        f.appendChild(document.createTextNode(' Obesity class III'));
    }
    try {
        if(isNaN(bmi)) throw 'please fill the blank';
    } catch (error) {
        f.innerHTML= 'Input is empty ' + error;
        f.style.color= 'red';
    }
    try {
        if (30<=bmi) throw 'Your health is in danger please visit a doctor';
    } catch (err) {
        warning.innerHTML= err;
    }
}