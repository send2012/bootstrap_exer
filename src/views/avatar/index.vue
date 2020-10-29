<template>
    <div class="avatar">
        <b-list-group>
            <b-list-group-item>
                <b-avatar button
                          @click="onClick"
                          variant="primary"
                          text="FF"
                          class="align-baseline"
                ></b-avatar>

                Button Text Avatar
            </b-list-group-item>

            <b-list-group-item>
                <b-avatar button
                          @click="onClick"
                          src="https://placekitten.com/300/300"
                ></b-avatar>

                Button Image Avatar
            </b-list-group-item>

            <b-list-group-item>
                <b-avatar button
                          @click="onClick"
                          icon="star-fill"
                          class="align-center"
                ></b-avatar>

                Button Icon Avatar
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: 'avatar',

        methods: {
            onClick()
            {
                this.$bvModal.msgBoxOk( 'User name: Fred Flintstone', {
                    title: 'User info',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'success',
                    headerClass: 'p-2 border-button-0',
                    footerClass: 'p-2 border-top-0',
                } );
            },
        },
    };
</script>

<style lang="scss"
       scoped
>

</style>
