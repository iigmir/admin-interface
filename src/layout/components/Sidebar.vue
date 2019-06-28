<template>
    <v-navigation-drawer v-model="local_sidebar" dark fixed app>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        {{ title }}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
            <v-list-tile
                v-for="(item, index) in menus"
                v-bind:key="item.name"
                v-on:click="switch_tab(index)">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.value }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
    data()
    {
        return {
            local_sidebar: false,
        };
    },
    watch:
    {
        sidebar_actived(val)
        {
            this.local_sidebar = val;
        }
    },
    computed:
    {
        ...mapState("layout", ["sidebar_actived"]),
        ...mapState("sidemenu", [
            "title",
            "menus",
            "chosed_index"
        ]),
    },
    methods:
    {
        switch_tab(id)
        {
            console.log(id);
            return;
        }
    },
    created()
    {
        this.local_sidebar = this.sidebar_actived;
    }
};
</script>