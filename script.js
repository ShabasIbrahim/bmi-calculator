function calculate(){
    let height=pheight.value
    let weight=pweight.value
    let age=page.value
    

    if(height=='' || weight=='' ||age==''){
        alert("Please enter all fields")
        
    }


    height=height/100

    bmi=(weight/(height*height))
bmi=bmi.toFixed(2)
    output.innerHTML=bmi



if(bmi<18.5){
    result.innerHTML="Under Weight"
    var out=result.value
    // out.style.color="red"

}
if(bmi>=18.5 && bmi<25)
result.innerHTML="Healthy"

if(bmi>=25 && bmi<30)
result.innerHTML="Over Weight"

if(bmi>=30)
result.innerHTML="Obese"




}

