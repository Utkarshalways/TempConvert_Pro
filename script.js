
const calculatetemp = () =>{

    
    const tempinput = document.getElementById("tempinput").value;
    // console.log(tempinput.value);

    const tempselect = document.getElementById("tempselect");
    const tempvalue = tempselect.options[tempselect.selectedIndex].value;
    // console.log(tempvalue);+

    let celTofar = (cel) =>{
        let Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }

    let farTocel = (far) => {
        let Celsius = Math.round((far - 32) * 5/9);
        return Celsius;
    }


    let result;

    if(tempvalue == 'cel'){
        result = celTofar(tempinput);
        document.getElementById("result").innerHTML = `${result} Fahrenheit`;
    }
    else{
        result = farTocel(tempinput);
        document.getElementById("result").innerHTML = `${result} Celsius`;
    }
    
}

