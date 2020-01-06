<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('あはれ')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>あはれ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('あはじ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あはじ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('あらし')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あらし</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あらざ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あらざ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あまの')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あまの</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あまつ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あまつ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あきの')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あきの</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あきか')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あきか</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('ありま')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>ありま</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ありあ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ありあ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('あさぼらけあ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あさぼらけあ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あさぼらけう')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あさぼらけう</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あさじ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あさじ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あい')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あい</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あけ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あけ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('あし')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>あし</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectSixteenCharacter',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
