let content = document.querySelector('.parentcontent')
// let content1 = document.querySelector('.content')

content.innerHTML = ` <form class="content">
<h1>Sign in</h1>
<div class="box1">
<input type="text" placeholder="Email" class="input1" required><i class="fa fa-address-book" aria-hidden="true"></i></input> 
</div>
<div class="box1">
<input type="password" placeholder="Password" class="input1" required><i class="fa-solid fa-eye"></i></input>
</div>
<div class="box2" id="boxi">
<input type="checkbox">
&nbsp;
<label for="" id="label1">Remember me</label>
<label for="" id="label2">Forgot Password?</label>

</div>
<input type="submit" class="box3">


</div>

</form>`
let content1 = document.querySelector('.content')
let f = 'true'
const tempu = ()=>{
    content.innerHTML = `<form class="content1"
    action="https://formspree.io/f/myyqyjdj"
    method="POST" name="mdn"  >
    <h1>Sign up</h1>
    <div class="box1">
    
    <input type="text" placeholder="First Name" class="input1" required name= "mdn1">
    </div>
    <div class="box1">
    <input type="text" placeholder="Last Name" class="input1" required>
    </div>
    <div class="box1">
    
    <input type="email" placeholder="Email" class="input1" required>
    </div>
    <div class="box1">
    <input type="password" placeholder="Password" class="input1" required name= "mdn2">
    </div>
    <div class="box2" id="boxi">
    <input type="checkbox" name= "mdn3">
    &nbsp;
    <label for="" id="label1">Remember me</label>
    
    </div>
    <input type="submit" class="box3" name= "mdn4" required>
    
    
    </div>
    
    </form>`
    signup.innerHTML = "Sign in"

}
const tempy = ()=>{
    content.innerHTML = `<form class="content">
        <h1>Sign in</h1>
        <div class="box1">
        <input type="text" placeholder="Email" class="input1" required><i class="fa fa-address-book" aria-hidden="true"></i></input> 
        </div>
        <div class="box1">
        <input type="password" placeholder="Password" class="input1" required><i class="fa-solid fa-eye"></i></input>
        </div>
        <div class="box2" id="boxi">
        <input type="checkbox">
        &nbsp;
        <label for="" id="label1">Remember me</label>
        <label for="" id="label2">Forgot Password?</label>
        
        </div>
        <input type="submit" class="box3">
        
        
        </div>
        
        </form>`
        f = 'true'
       signup.innerHTML = "Sign up"

}
let signup = document.querySelector('.botf')
signup.addEventListener('click',()=>{

    if(f=='true')
    {
        setTimeout(()=>{
           content.style.opacitiy = "90%"
        },500);
        setTimeout(()=>{
            content.style.opacity = "80%"
         },600);
         setTimeout(()=>{
            content.style.opacity = "70%"
         },700);
         setTimeout(()=>{
            content.style.opacity = "50%"
         },800);
         setTimeout(()=>{
            content.style.opacity = "0%"
         },1000);
         setTimeout(()=>{
           tempu()
         },1100);
         setTimeout(()=>{
            content.style.opacitiy = "0%"
         },1200);
         setTimeout(()=>{
             content.style.opacity = "50%"
          },1300);
          setTimeout(()=>{
             content.style.opacity = "70%"
          },1400);
          setTimeout(()=>{
             content.style.opacity = "80%"
          },1500);
          setTimeout(()=>{
             content.style.opacity = "100%"
          },1600);
        
      
        
      
        

    f= 'false'
    }
    else
    {  setTimeout(()=>{
        content.style.opacitiy = "90%"
     },500);
     setTimeout(()=>{
         content.style.opacity = "80%"
      },600);
      setTimeout(()=>{
         content.style.opacity = "70%"
      },700);
      setTimeout(()=>{
         content.style.opacity = "50%"
      },800);
      setTimeout(()=>{
         content.style.opacity = "0%"
      },1000);
      setTimeout(()=>{
        tempy()
      },1100);
      setTimeout(()=>{
         content.style.opacitiy = "0%"
      },1200);
      setTimeout(()=>{
          content.style.opacity = "50%"
       },1300);
       setTimeout(()=>{
          content.style.opacity = "70%"
       },1400);
       setTimeout(()=>{
          content.style.opacity = "80%"
       },1500);
       setTimeout(()=>{
          content.style.opacity = "100%"
       },1600);
        
    }
})