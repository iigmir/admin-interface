<template>
    <v-navigation-drawer permanent>
        <v-toolbar flat>
        <v-list>
            <v-list-tile>
                <v-list-tile-title class="title">
                    Application
                </v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
            <!-- dense class="pt-0" -->
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon> home </v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Page 1</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon> dashboard </v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Page 2</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon> event </v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Page 3</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>