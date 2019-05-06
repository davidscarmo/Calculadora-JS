var  i = 0,
result = [''],
n1= 0,n2 = 0, n3 = 0, n4 = 1, n5 = 0; opResult ='',z = 0;


function inputNum(a){
    result[i] += a;
    console.log(result[i]);
    document.getElementById("visor").value = result[i];    
};

function inputOp(op){
    opResult = op;
    n1 = result.join();
    result[i] = '';
    console.log(op);
    document.getElementById("visor").value = op; 
    return op;
}

function inputPtn(){
    if(z == 0){
    result[i] += '.';
    document.getElementById("visor").value = result[i];
    z = 1;
    }
    
}

function limpar(){
    result = result.slice(0,-1);
    
    document.getElementById("visor").value = result;  
    result = [0];
    n1,n2,n3 = 0;
}
function resulOp(i){
    var n2 = result.join();

    n1 = parseFloat(n1);
    n2 = parseFloat(n2); 
    console.log(opResult);   
    if(opResult == '+')
    {
    document.getElementById("visor").value = n1 + n2 + n3;
    opResult = '';
    result= [0];
    n3 += n1 + n2;
    console.log(n3);
    }
    else if(opResult == '-')
    {
    n3 -= -(n1 - n2);
    document.getElementById("visor").value = n3;
    opResult = '';
    result= [0];
    console.log(n3);
    }
    else if(opResult == '*')
    {   
        console.log("n1" + n1);
        console.log("n2" + n2);
        console.log("n3" + n3);
        if(n3 != 0){
            n4 = n3;
            n1 = 1;
            n4 *= n1 * n2;
        }
        else{
            n3 = 1;
            n4 *= n1 * n2;    
        }
    
    document.getElementById("visor").value = n4;
    opResult = '';
    result= [0];
    n3 = n4;
    }
    else if(opResult == '/')
    {
        n5 = n3;
        n3 = n5;
        console.log("--n1 " + n1);
        console.log("--n2 " + n2);
        console.log("--n3 " + n3);
        console.log("--n5 " + n5);
        
    if(n5 == 0){
        n5 = n1 / n2;   
    }
    else {
        n5 = n3;
        n5 = n5 / n2;
    }
    document.getElementById("visor").value = n5;
    opResult = '';
    result= [0];
    n3 = n5;
    console.log("n1 " + n1);
        console.log("n2 " + n2);
        console.log("n3 " + n3);
        console.log("n5 " + n5);
    }
    else {
        document.getElementById("visor").value;
    }
    
}