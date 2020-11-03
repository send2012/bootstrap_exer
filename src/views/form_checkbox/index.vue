<template>
    <div class="form-checkbox">
        <!-- Indeterminate (tri-state) support -->
        <div>
            <b-form-checkbox v-model="checked"
                             :indeterminate.sync="indeterminate"
            >
                Click me to see what happens
            </b-form-checkbox>

            <div class="mt-3">
                Checked:
                <strong>{{ checked }}</strong>

                <br />

                Indeterminate:
                <strong>{{ indeterminate }}</strong>
            </div>

            <b-button @click="toggleIndeterminate">
                Toggle Indeterminate State
            </b-button>
        </div>

        <!-- Indeterminate checkbox use-case example -->
        <div>
            <b-form-group>
                <template #label>
                    <b>
                        Choose your flavours:
                    </b>

                    <br />

                    <b-form-checkbox v-model="allSelected"
                                     :indeterminate="indeterminate"
                                     aria-describedby="flavours"
                                     aria-controls="flavours"
                                     @change="toggleAll"
                    >
                        {{
                            allSelected ? 'Un-select-all' : 'Select All'
                        }}
                    </b-form-checkbox>
                </template>

                <b-form-checkbox-group id="flavours"
                                       v-model="selected"
                                       :options="flavours"
                                       class="ml-4"
                                       aria-label="Individual flavours"
                                       stacked
                ></b-form-checkbox-group>
            </b-form-group>

            <div>
                Selected:
                <strong>{{ selected }}</strong>

                <br />

                All Selected:
                <strong>{{ allSelected }}</strong>

                <br />

                Indeterminate:
                <strong>{{ indeterminate }}</strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form_checkbox',

        data()
        {
            return {
                // // Indeterminate (tri-state) support -> start
                checked      : true,
                // indeterminate: true,
                // // Indeterminate (tri-state) support -> end

                // Indeterminate checkbox use-case example -> start
                flavours     : [
                    'Orange',
                    'Grape',
                    'Apple',
                    'Lime',
                    'Very Berry',
                ],
                selected     : [],
                allSelected  : false,
                indeterminate: false,
                // Indeterminate checkbox use-case example -> end
            };
        },

        methods: {
            // Indeterminate (tri-state) support -> start
            toggleIndeterminate()
            {
                this.indeterminate = !this.indeterminate;
            },
            // Indeterminate (tri-state) support -> end

            // Indeterminate checkbox use-case example -> start
            toggleAll( checked )
            {
                this.selected = checked ?
                                this.flavours.slice() :
                                [];
            },
            // Indeterminate checkbox use-case example -> end
        },

        watch: {
            selected( newVal, oldVal )
            {
                // Handle changes in individual flavour checkboxes
                if ( newVal.length === 0 )
                {
                    this.indeterminate = false;
                    this.allSelected   = false;
                }
                else if ( newVal.length === this.flavours.length )
                {
                    this.indeterminate = false;
                    this.allSelected   = true;
                }
                else
                {
                    this.indeterminate = true;
                    this.allSelected   = false;
                }
            },
        },
    }
</script>

<style lang="scss"
       scoped
>

</style>
