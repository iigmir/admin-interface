<template>
    <v-toolbar app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-bind:to="'/'" flat>Home</v-btn>
            <v-btn v-bind:to="'/about'" flat>About</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: "Navigator"
};
</script>