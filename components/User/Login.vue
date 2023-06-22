<template>
  <div class="loginMainComponent">
    <div class="mainContainer card">
      <div class="loginHead">

        <Logo/>
        <div class="position-relative " style="font-weight: bold;font-size: 25px;top:-15px;color:#03A9F4">
          - Login
        </div>
      </div>
      <div style="width:90%;margin:50px auto;">
       <form action="" @click.prevent="">
        <label for="" class="text-start">Emial</label>
        <input type="text" class="form-control "/>
        <label>Password</label>
        <input type="password" class="form-control"/>
        <div class="w-100 text-center">

          <input type="submit" value="Login" class="btn btn-primary w-100 mt-5 text-center" style="background-color: #03A9F4;border: none;">
        </div>
       </form>
      </div>
    </div>
  </div>
</template>

<style>
.loginMainComponent {
  width: 100%;
  position: fixed;
  top:15rem;
  height: 1080px;
  z-index: 3;

}

.mainContainer {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  
}


.loginHead{
  position: relative;
  left:5rem;
  top:2rem;
  display: flex;
  gap:60px;
}



</style>