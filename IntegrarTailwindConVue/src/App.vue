<script setup>
  import { ref } from 'vue'
  import CardComponent from '@/components/CardComponent.vue'

  const users = ref([
    {
      name: "Juana",
      mail: "juana@mail.com"
    },
    {
      name: "Fulano",
      mail: "fulano@mail.com"
    }
  ])

  const borrarTarjeta = (index) => {
    console.log("kill to", index)
    users.value.splice(index, 1)
    console.log(users)
  }
</script>

<template>
  <h1 class=" text-2xl">Hola mundo</h1>

  <div class=" space-y-2">
    <CardComponent v-for="(user, index) in users" :key="index" :name="user.name" :mail="user.mail" :index="index" @borrarTarjeta="borrarTarjeta" />
  </div>
</template>