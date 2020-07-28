
let a_col=['あ','い','う','え','お']
let ka_col=['か','き','く','け','こ']
let sa_col=['さ','し','す','せ','そ']
let ta_col=['た','ち','つ','て','と']
let na_col=['な','に','ぬ','ね','の']
let ha_col=['は','ひ','ふ','へ','ほ']
let ma_col=['ま','み','む','め','も']
let ya_col=['や','ゆ','よ']
let ra_col=['ら','り','る','れ','ろ']
let wa_col=['わ','を','ん']

let a_state=true
let ka_state=false
let sa_state=false
let ta_state=false
let na_state=false
let ha_state=false
let ma_state=false
let ya_state=false
let ra_state=false
let wa_state=false



let audio_right = new Audio('audio/right.wav');
let audio_wrong = new Audio('audio/wrong.wav');

//handles the logic at the very end
let check=false

let current_selection=a_col




let main_display= document.getElementById('main_display')

let current_kana=current_selection[Math.floor(Math.random() * current_selection.length)]

console.log(current_kana)

main_display.textContent=current_kana


let exception_check=function(key){

    let exception_list=['-','=','`',';','\'',',','.','\\','/',')']

    if(exception_list.includes(key)){return true}

    else{return false}

}


let exception_compare=function(key){


if(key=='-' && current_kana=='ほ'){return true}

else if(key=='=' && current_kana=='へ'){return true}

else if(key=='`' && current_kana=='ろ'){return true}

else if(key==';' && current_kana=='れ'){return true}

else if(key=='\'' && current_kana=='け'){return true}

else if(key==',' && current_kana=='ね'){return true}

else if(key=='.' && current_kana=='る'){return true}

else if(key=='/' && current_kana=='め'){return true}

else if(key=='\\' && current_kana=='む'){return true}

else if(key==')' && current_kana=='を'){return true}

else{return false}

}





const key_convert={

    1:'ぬ', 2:'ふ', 3:'あ', 4:'う', 5:'え', 6:'お', 7:'や', 8:'ゆ',
    9:'よ', 0:'わ',  q:'た', w:'て', e:'い', r:'す',
    t:'か', y:'ん', u:'な', i:'に', o:'ら', p:'せ', a:'ち', s:'と',
    d:'し', f:'は', g:'き', h:'く', j:'ま', k:'の', l:'り', z:'つ',
    x:'さ', c:'そ', v:'ひ', b:'こ', n:'み', m:'も', 
}



let a_b=document.getElementById('a_b')
let ka_b=document.getElementById('ka_b')
let sa_b=document.getElementById('sa_b')
let ta_b=document.getElementById('ta_b')
let na_b=document.getElementById('na_b')
let ha_b=document.getElementById('ha_b')
let ma_b=document.getElementById('ma_b')
let ya_b=document.getElementById('ya_b')
let ra_b=document.getElementById('ra_b')
let wa_b=document.getElementById('wa_b')



let no_button=function(){

if(!(a_state || ka_state || sa_state || ta_state||na_state||ha_state||ma_state||ya_state||ra_state||wa_state) ){

    a_state=true;
    a_b.classList.add('on')
    current_selection=a_col

}

}

a_b.addEventListener('click',function(){


if(a_state){

    a_b.classList.remove('on')
    a_state=false
    let index = current_selection.indexOf('あ');
    
   
    current_selection.splice(index,5)

}

else{
    
a_b.classList.add('on')

a_state=true;
current_selection=current_selection.concat(a_col)

}

no_button()



})

ka_b.addEventListener('click',function(){


    if(ka_state){
    
        ka_b.classList.remove('on')
        ka_state=false
        let index = current_selection.indexOf('か');
        current_selection.splice(index,5)


    }
    
    else{ka_b.classList.add('on')
    
    ka_state=true;
    current_selection=current_selection.concat(ka_col)
    
    }
    
    
    no_button()

    })



    sa_b.addEventListener('click',function(){


        if(sa_state){
        
            sa_b.classList.remove('on')
            sa_state=false
            let index = current_selection.indexOf('さ');
            current_selection.splice(index,5)
    
    
        }
        
        else{sa_b.classList.add('on')
        
        sa_state=true;
        current_selection=current_selection.concat(sa_col)
        
        }
        
        
        no_button()
    
        })

        ta_b.addEventListener('click',function(){


            if(ta_state){
            
                ta_b.classList.remove('on')
                ta_state=false
                let index = current_selection.indexOf('た');
                current_selection.splice(index,5)
        
        
            }
            
            else{ta_b.classList.add('on')
            
            ta_state=true;
            current_selection=current_selection.concat(ta_col)
            
            }
            
            
            no_button()
        
            })

            na_b.addEventListener('click',function(){


                if(na_state){
                
                    na_b.classList.remove('on')
                    na_state=false
                    let index = current_selection.indexOf('な');
                    current_selection.splice(index,5)
            
            
                }
                
                else{na_b.classList.add('on')
                
                na_state=true;
                current_selection=current_selection.concat(na_col)
                
                }
                
                
                no_button()
            
                })


                ha_b.addEventListener('click',function(){


                    if(ha_state){
                    
                        ha_b.classList.remove('on')
                        ha_state=false
                        let index = current_selection.indexOf('は');
                        current_selection.splice(index,5)
                
                
                    }
                    
                    else{ha_b.classList.add('on')
                    
                    ha_state=true;
                    current_selection=current_selection.concat(ha_col)
                    
                    }
                    
                    
                    no_button()
                
                    })
    
    
                    ma_b.addEventListener('click',function(){


                        if(ma_state){
                        
                            ma_b.classList.remove('on')
                            ma_state=false
                            let index = current_selection.indexOf('ま');
                            current_selection.splice(index,5)
                    
                    
                        }
                        
                        else{ma_b.classList.add('on')
                        
                        ma_state=true;
                        current_selection=current_selection.concat(ma_col)
                        
                        }
                        
                        
                        no_button()
                    
                        })
        
        

                        ya_b.addEventListener('click',function(){


                            if(ya_state){
                            
                                ya_b.classList.remove('on')
                                ya_state=false
                                let index = current_selection.indexOf('や');
                                current_selection.splice(index,3)
                        
                        
                            }
                            
                            else{ya_b.classList.add('on')
                            
                            ya_state=true;
                            current_selection=current_selection.concat(ya_col)
                            
                            }
                            
                            
                            no_button()
                        
                            })
            
            

                            ra_b.addEventListener('click',function(){


                                if(ra_state){
                                
                                    ra_b.classList.remove('on')
                                    ra_state=false
                                    let index = current_selection.indexOf('ら');
                                    current_selection.splice(index,5)
                            
                            
                                }
                                
                                else{ra_b.classList.add('on')
                                
                                ra_state=true;
                                current_selection=current_selection.concat(ra_col)
                                
                                }
                                
                                
                                no_button()
                            
                                })
                

                                wa_b.addEventListener('click',function(){


                                    if(wa_state){
                                    
                                        wa_b.classList.remove('on')
                                        wa_state=false
                                        let index = current_selection.indexOf('わ');
                                        current_selection.splice(index,3)
                                
                                
                                    }
                                    
                                    else{wa_b.classList.add('on')
                                    
                                    wa_state=true;
                                    current_selection=current_selection.concat(wa_col)
                                    
                                    }
                                    
                                    
                                    no_button()
                                
                                    })
                    
                    




var display_pos = document.getElementById('main_display');

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }


 


function pop() { 
  // Loop to generate 30 particles at once
  for (let i = 0; i < 30; i++) {
    // We pass the mouse coordinates to the createParticle() function
    createParticle(x, y);
    
  }
}
function createParticle(x, y) {
  // Create a custom particle element
  const particle = document.createElement('particle');
  // Append the element into the body
  document.body.appendChild(particle);


// [...]
  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  // Apply the size on each particle
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = 'springgreen';


  // [...]
  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Store the animation in a variable because we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    // Set a random duration from 500 to 1500ms
    duration: 500 + Math.random() * 1000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    // Delay every particle with a random value from 0ms to 200ms
    delay: Math.random() * 200
  });




  animation.onfinish = () => {
    particle.remove();
  };














}


































document.addEventListener('keydown', event => {
    const key = event.key;
  


    if(exception_check(key)){

       

        if(exception_compare(key)){check=true}

        else(check=false)

    }

    else if((key_convert[key]==current_kana)){check=true}
        

    else{check=false}




    //end case based on check
    if (check){
        current_kana=current_selection[Math.floor(Math.random() * current_selection.length)]
        main_display.textContent=current_kana
        main_display.style.color='black';
        
        audio_right.currentTime=0;
        audio_right.play()
        

        x=getCoords(display_pos).left+40
        y=getCoords(display_pos).top+65
        pop()
            


    }

    else{

        if(key!="Shift"){
            
            
            main_display.style.color='rgb(255, 80, 80)';
            audio_wrong.currentTime=0;
            audio_wrong.play()
        
        }
        

    }
   



});



