<template>
    <div class="home">
        <img alt="Vue logo"
             :src="require( '@/assets/logo.png' )"
        />

        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/helloworld/';

    export default {
        name      : 'builtIn-components',

        components: {
            HelloWorld,
        },
    }
</script>
