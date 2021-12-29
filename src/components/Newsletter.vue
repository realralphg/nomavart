<template>
  <section class="news q-my-md q-py-xl section" id="about">
      <div class="hold container">
          <div class="newsletter">
            <div class="det">
                <small style="font-size: 1em" class="text-white text-center small">Get our latest news</small>
                <p class="text-white" style="font-size: 2.5em">Newsletter</p>
            </div>
            <div class="input">
               <section class="mainContent">
                  <div class="formContainer">
                    <form action="">
                        <fieldset class="fieldInput">
                           <input
                            class="form-input"
                            type="email"
                            placeholder="Your e-mail"
                            />
                            <button type="submit" class="form-submit">Subscribe</button>
                        </fieldset>
                    </form>
                  </div>
                </section>
            </div>
      </div>

      </div>
      

    
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

.news{
    background: url("/images/newslet.png"),linear-gradient(243.58deg, #33CC33 -17.03%, #006633 106.08%) !important;;
opacity: 0.95 !important;
background-repeat: no-repeat !important;
background-size: cover !important;
background-position: center !important;
background-blend-mode: overlay;
width: 100%;
}

.newsletter{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
}


.fieldInput {
  display: block;
  width: 100%;
  height: 45px;
  position: relative;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  background: #fff;
  /* background: rgba(202, 198, 201, 0.33); */
  border: none;

  /* border-radius: 35px; */
  overflow: hidden;
}

fieldset {
  padding: 0 !important;
}

.form-input {
  width: 90%;
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  color: #838383;
  /* color: #6a7c92; */
}

.form-input:focus {
  outline: none;
}
.form-submit {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 35%;
  height: 45px;
  /* border-radius: 17px; */
  border: none;
  background: #33CC33;
  /* background: #9d1e81; */

  cursor: pointer;
}
@media(max-width:600px){
    .newsletter{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: .2rem;
    align-items: center;
}

.newsletter .det .small, .newsletter .det p{
    text-align: center !important;
}

}

</style>
