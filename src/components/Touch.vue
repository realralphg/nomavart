<template>
  <section class="aboutt q-py-xl q-mt-xl section" id="about">
        <div class="hold container">
          <div class="det q-pb-xl">
            <h2 style="font-size: 2.5em" class="text-primary text-weight-bold">Leave a Comment</h2>
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, natus!</p>
          </div>
          <div class="inputs">
               <div class="two-inputs">
                   <div class="input">
                       <label class="text-white" for="">Full Name</label> <br> <br>
                       <input type="text">
                   </div>
                   <div class="input">
                       <label class="text-white" for="">Email</label> <br> <br>
                       <input type="text">
                    </div>

                </div>
        
                <div class="input">
                    <label class="text-white" for="">Comment</label> <br> <br>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                </div>

                <q-btn class="q-px-xl q-my-xl q-py-sm btnn">Submit</q-btn>

            </div>
        </div>
      
    
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutt{
    background: url("/images/touch.png"),linear-gradient(180deg, #0A1129 0%, #19213C 100%) !important;
opacity: 0.95 !important;
background-repeat: no-repeat !important;
background-size: cover !important;
background-position: center !important;
background-blend-mode: overlay;
width: 100%;
padding: 4rem;
}

.two-inputs{
    display: flex;
    gap: 2rem;
    margin-bottom:1.5rem ;
}


.input {
    width: 100%;
}

.input input, textarea{
    border: none;
    background-color: #fff;
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
}

.btnn{
    background: linear-gradient(243.58deg, #33CC33 -17.03%, #006633 106.08%) !important;
}

@media(max-width:500px){
    .two-inputs{
    display: flex;
 flex-direction: column;
}

.aboutt{
   background: url("/images/ilu.png"),linear-gradient(180deg, #0A1129 0%, #19213C 100%) !important;
padding: 0rem;
margin:  0 !important;
}

.det h2,.det{
    margin-bottom: 1.5rem;
}

.hold{
    padding: 1rem 0;
}
}

</style>
