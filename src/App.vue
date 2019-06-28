<template>
    <v-app>
        <Sidebar />
        <Navigator />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import Navigator from "./components/Navigator.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "App",
    components:
    {
        Navigator,
        Sidebar
    }
};
</script>
