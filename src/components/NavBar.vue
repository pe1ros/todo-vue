<template>
  <nav class="indigo darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">ToDo's</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link tag="li" to="/" exact active-class="active">
            <a href="#">Create ToDo</a>
          </router-link>
        </li>
        <li>
          <router-link tag="li" to="/list" active-class="active">
            <a href="#">List ToDo's</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 0 20px;
}
</style>
