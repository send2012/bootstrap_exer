<template>
    <div class="home">
        <span class="home-go"
              v-for="linkItem of linkItemList"
              :key="linkItem.id"
              @click="goRelated( linkItem.name, linkItem.url )"
        > {{ linkItem.name }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'home',

        data: () => ( {
            linkItemList: [
                {
                    id  : 1,
                    name: 'about',
                    url : '/about',
                },
                {
                    id  : 2,
                    name: 'builtIn-components',
                    url : '/builtIn_components',
                },
                {
                    id  : 3,
                    name: 'b-alert',
                    url : '/alert',
                },
                {
                    id  : 4,
                    name: 'b-avatar',
                    url : '/avatar',
                },
                {
                    id  : 5,
                    name: 'bs-button',
                    url : '/button',
                },
                {
                    id  : 6,
                    name: 'b-calendar',
                    url : '/calendar',
                },
                {
                    id  : 7,
                    name: 'b-carousel',
                    url : '/carousel',
                },
                {
                    id  : 8,
                    name: 'bs-form',
                    url : '/form',
                },
            ],
        } ),

        methods: {
            goRelated( goName, goUrl )
            {
                this.$router.push( {
                    name: goName,
                    path: goUrl,
                } );
            },
        },
    };
</script>

<style lang="scss"
       scoped
>
    @import "style";
</style>
