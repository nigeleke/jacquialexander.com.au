<template>
  <div class="container">
    <div class="container-inner">
      <nav>
        <li>
          <NuxtLink to="/">Welcome</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lessons">Lessons</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tacs">T&Cs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.container-inner {
  text-align: center;
}

nav {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  color: silver;
}

li {
  display: inline;
  padding-left: 15px;
  padding-right: 15px;
  border-left-style: solid;
  border-color: silver;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: none;
}

li:first-of-type {
  border-left-style: none;
}
</style>