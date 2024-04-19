<script setup>



</script>

<template>
  <div class="header">
    <h1>Welcome Aboard</h1>
    <p></p>
  </div>
  <div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
    </nav>
    <!-- <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p> -->

    <main>
      
      <RouterView />

    </main>
    <div class="footer">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav {
background-color:#020887 ;
  margin-bottom: 10px;
  padding: 10px;
}

nav>a{
  border: 2px solid #647AA3;
  color: white;
}

nav>a+a {
  margin-left: 10px;

}

.header {
  /* padding: 60px; */
  text-align: center;
  background:white;
  color: #020887;
  font-size: 30px;
  width: 100%;
}

.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#cccccc;
  background-image:url("assets/banner/19861.jpg") ;
  color: white;
  text-align: center;
}
</style>
