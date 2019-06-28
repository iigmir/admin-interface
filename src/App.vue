<template>
    <v-app>
        <Navigator />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import Navigator from "./components/Navigator.vue";

export default {
    name: "App",
    components: {
        Navigator
    },
    data () {
        return {
            //
        };
    }
};
</script>
