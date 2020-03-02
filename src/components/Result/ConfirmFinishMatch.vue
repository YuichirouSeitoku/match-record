<template>
    <div>
        <div>
            <p class="has-text-weight-medium has-text-centered">試合を終了しますか？</p>
        </div>
        <div class="columns">
            <div class="column">
                <RouterLink to ='/ResultMatch'>
                    <div class="box">
                        <p class="has-text-weight-medium has-text-centered">はい</p>
                    </div>
                </RouterLink>
            </div>
            <div class="column">
                <RouterLink to = '/TopMenu'>
                    <div class="box">
                        <p class="has-text-weight-medium has-text-centered">いいえ</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
