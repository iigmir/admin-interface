<template>
    <v-layout row>
        <v-flex xs10 offset-xs1>
            <h1 class="mb-2"> User list </h1>
            <p> Here's user list. </p>
            <v-card>
                <v-list>
                    <template v-for="(item, index) in list">
                        <v-list-tile v-bind:key="item.email" avatar>
                            <v-list-tile-avatar>
                                <img v-bind:src="item.picture.thumbnail">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.name.last"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.location.city"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider v-bind:key="index"></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "Users",
    data () {
        return {
            grouped_number: 5,
        };
    },
    computed:
    {
        ...mapState("users", ["list"]),
        grouped_list()
        {
            let ary = [];
            let lst = this.list;
            for( let i = 0; i<lst.length; i=i+this.grouped_number+1 )
            {
                ary.push( lst.slice( i, i+this.grouped_number ) );
            }
            return ary;
        }
    },
    methods:
    {
        ...mapActions("users", ["FETCH_list"])
    },
    created()
    {
        this.FETCH_list();
    }
};
</script>
