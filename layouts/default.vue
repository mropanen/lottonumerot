<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2025 Bunnyfeet</p>
    </footer>
  </div>
</template>

<script setup>
</script>
<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Header Styles */
header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

header a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

header a:hover {
  color: #d4f5d4;
}

/* Main Content Styles */
main {
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 80vh;
}

/* Footer Styles */
footer {
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

footer p {
  margin: 0;
}
</style>