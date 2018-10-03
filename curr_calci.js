function displayResult(){
    var requestURL='https://v3.exchangerate-api.com/bulk/f88ecfdcd0bd9f0ea36cab8c/USD';
    var request=new XMLHttpRequest();
    request.open('GET', requestURL);
    request.response.Type='json';
    request.send()
    
    request.onload=function(){
      var temp = request.response;
        var g = JSON.parse(temp);
        console.log(g["rates"]["INR"]);
        var x=document.getElementById("converter").value;
        var c=0;
    let y=g["rates"][x];
    for(var i=0;i<g["rates"].length;i++)
    {
        if(y===["rates"][i])
        {
            ++c;
        if(c==1)
        {
            break;
        }


        }
    }
    if(c==0)
    {
        console.log("Wrong Input");
    }

    var val=document.getElementById("converterd").value;
    let r=val/y;

    var new_x=document.getElementById("Currency").value;
    let new_y=g["rates"][new_x];
    let new_r=(new_y*r);
    console.log(new_r)
    document.getElementById('newvalue').value = new_r;
        }
    
}
/*
var o=document.CreateTextNode(new_r);
var data=document.getElementById("Data");
data.AppendChild(o);
*/
