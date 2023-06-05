<script setup>
    const props = defineProps(
        {
            name: {
                type: String,
                default: "No name"
            },
            mail: {
                type: String,
                default: "No mail"
            },
            index: {
                type: Number
            }
        }
    )

    const emit = defineEmits(['borrarTarjeta'])

    const borrarTarjeta = (index) => {
        console.log("Borrar tarjeta ", index)
        emit("borrarTarjeta", index)
    }

    const mensaje = () => {
        console.log("Diste click en la foto")
    }
</script>

<template>
 <div class=" w-48 rounded shadow overflow-hidden">
    <div class=" inline-block align-top">
        <img @click="mensaje" src="https://picsum.photos/40" alt="">
    </div>
    <div class=" inline-block pl-2">
        <h2 class=" text-sm font-semibold ">{{ props.name }}</h2>
        <p class=" text-xs">{{ props.mail }}</p>
    </div>
    <span class="inline-block ml-4 bg-red-400 text-white rounded leading-none py-0 px-2 hover:cursor-pointer hover:bg-red-600" @click="borrarTarjeta(props.index)">
        x
    </span>
 </div>
</template>