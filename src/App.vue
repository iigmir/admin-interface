<template>
    <v-app>
        <Navigator />
        <Sidebar v-if="sidebar_actived" />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import Navigator from "./components/Navigator.vue";
import Sidebar from "./components/Sidebar.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components:
    {
        Navigator,
        Sidebar
    },
    computed:
    {
        ...mapState("layout", ["sidebar_actived"])
    }
};
</script>
