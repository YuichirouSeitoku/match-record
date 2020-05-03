<template>
    <div>
        <div>
            <p class="text-center text--secondary font-weight-light">試合を終了しますか？</p>
        </div>
        <div>
            <div>
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/InputOpponentName"
                >
                    <p class="text-center text--secondary font-weight-light">はい</p>
                </v-card>
            </div>
            <div>
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/BaseMenu"
                >
                        <p class="text-center text--secondary font-weight-light">いいえ</p>
                </v-card>
            </div>
        </div>
    </div>
</template>

