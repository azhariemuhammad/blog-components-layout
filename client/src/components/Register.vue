<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
         <div class="card">
          <div class="card-block">
            <h3 class="card-title">Azharie's Note</h3>
            <router-link :to="`/register/signup`" ><button id="signup">SIGN UP</button></router-link>
            <p class="separator">--- Already have Account ? ---</p>
            <router-link :to="`/register/signin`"><button id="login">LOG IN</button></router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  beforeCreate: function () {
    return (localStorage.getItem('token')) ? this.$router.push({name: 'blog'}) : console.log('hello')
  }
}
</script>

<style>
#signup {
  color: #fff;
  background-color:#1db954!important;
  width: 100%;
  height: 56px;
  border-radius: 500px;
  font-size: 18px;
  letter-spacing: 3px;
  margin-top: 20px;
}
#login {
  color: black;
  background-color:#fff!important;
  width: 100%;
  height: 56px;
  border-radius: 500px;
  font-size: 18px;
  letter-spacing: 3px;
}
p.separator {
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 0.4rem;
}
</style>
