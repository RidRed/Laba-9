function chet()
{
    var fir = document.getElementById("First").value;
    var Yslov = document.getElementById("Ysl");
    var Result = document.getElementById("Res");
    var p = 0;
    var mass = []
    if(fir != " ")
    {
        fir = Number(fir);
            for(var i = 1 ; i < fir ; i++)
            {
                for(var j = 2; j < fir; j++)
                {
                
                if(fir % i >= 1 && i % j == 0 || fir / i == fir)
                {
                    
                    
                    if(fir % j >= 1 || fir / i == fir)
                    {   

                        if(i % j >= 1 || i % j == 0)
                        {

                            mass[p] = i;
                            p++;                          
                            console.log("Привет " + i , + j , + p);
                                
                                break;
                        }
                    }
                    else
                    {
                        break;
                    }   
                }

               
                }
            }
        
        
    }
    for(var g = 0; g < p; g++)
            {
            var Rol = mass[g] ** p;
            console.log(mass);
            console.log(Rol) 
             if(Rol % fir == 1  && mass[g] != 1)
                {
                    var Res = " g = "+ mass[g];
                    Result.innerHTML = "Результат:"
                     Result.innerHTML += Res;
                     break;
                }
            }
}