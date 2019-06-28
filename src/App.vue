<template>
    <v-app>
        <Navigator />
        <Sidebar />
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
