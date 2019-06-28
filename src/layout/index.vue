<template>
    <v-app>
        <Sidebar />
        <Navigator />
        <v-content>
            <!-- Contents in src/views directory -->
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import Navigator from "./components/Navigator.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "BasicLayout",
    components:
    {
        Navigator,
        Sidebar
    }
};
</script>
