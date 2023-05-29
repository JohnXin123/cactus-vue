<script setup>

const isLoaded = defineProps({
    loaded: Boolean
})

</script>

<template>
    <div v-if="isLoaded.loaded" class="fixed top-0 right-0 w-full z-50 flex justify-center items-center text-center min-h-screen bg-slate-500 opacity-50">
        <div class="rings"></div>
        <span>loading...</span>
    </div>
</template>

<style scoped>
    .rings{
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: ring 2s linear infinite;
    }

    @keyframes ring{
        0%{
            transform: rotate(0deg);
            box-shadow: 1px 5px 2px #e65c00;
        }

        50%{
            transform: rotate(180deg);
            box-shadow: 1px 5px 2px #18b201;
        }

        100%{
            transform: rotate(360deg);
            box-shadow: 1px 5px 2px #0456c8;
        }
    }

    .rings::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0px 0px 7px rgba(255, 255, 255, .5);
    }

    span{
        color: #201e1e;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 200px;
        animation: text 3s ease-in-out infinite;
    }

    @keyframes text {
        50%{
            color: rgb(121, 92, 92);
        }
    }
</style>