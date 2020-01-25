<template>
    <div>
        <div class="columns is-centered is-mobile">
            <div class="column is-half">
                <b-button rounded size="is-large" tag="router-link" to="/SignUp">新規会員登録</b-button>
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-half">
                <b-button rounded size="is-large" tag="router-link" to="/SignIn">ログイン</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>
