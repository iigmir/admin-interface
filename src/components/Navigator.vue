<template>
    <v-toolbar app color="orange">
        <v-toolbar-side-icon v-on:click="set_tab()"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-bind:to="'/'" flat>Home</v-btn>
            <v-btn v-bind:to="'/about'" flat>About</v-btn>
            <v-btn v-bind:to="'/users'" flat>Users</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "Navigator",
    computed:
    {
        ...mapState("layout", ["sidebar_actived"])
    },
    methods:
    {
        ...mapMutations("layout", ["SET_sidebar_actived"]),
        set_tab()
        {
            this.SET_sidebar_actived( !this.sidebar_actived );
        }
    }
};
</script>