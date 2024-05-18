let button=document.querySelectorAll(".box")

let turno=true;


const winPattern=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let move=[0,1,2,3,4,5,6,7,8];

let Computermove=Math.floor(Math.random()*9);

button.forEach((button)=>
{
button.addEventListener("click",(e)=>
    {
        
           
 {
        if(turno===true)
            {
                button.innerText="X";
                turno=false;
            }
        else{
                button.innerText="O";
                turno=true;
         }

         button.disabled=true;

         checkWinner();
        }
    }

);
}
);

const checkWinner=()=>
    {
         
       for(let pattern of winPattern)
        {
            let pos1=button[pattern[0]].innerText;
            let pos2=button[pattern[1]].innerText;
            let pos3=button[pattern[2]].innerText;

            if(pos1!="" && pos2!="" && pos3!="")
                {
                    if(pos1===pos2 && pos2===pos3)
                        {
                            let win=document.querySelector(".container");
                            let element=document.createElement("p");
                            element.innerHTML="<h1>Winner!!!</h1>";
                            //element.style.color="white";
                            element.style.fontSize="x-large";
                            win.prepend(element);
                            
                            
                            return;
                        }
                }
        }
    
    
    
    }
    
    let reset=document.querySelector(".reset");
    
    reset.addEventListener('click',()=>
    {
    button.forEach((button)=>
    {
        
          button.disabled=false;

        if(button.getAttribute("class")!="reset")
            {

                button.innerHTML="";

            }


    });
})
;