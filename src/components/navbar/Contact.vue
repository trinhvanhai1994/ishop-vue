<template>
  <div>
    <h1>Contact Me</h1>
    <ul>
      <li>Email: {{email}}</li>
      <h2>the product id is :{{this.$route.params.id}}</h2>
      <li>Website: {{web}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: 'maegan@maeganwilson.com',
      web: 'maeganjwilson.github.com'
    }
  }
}
</script>
