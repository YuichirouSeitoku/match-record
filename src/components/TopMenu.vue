<template>
	<div class="main_container">
        <div>
            <p>Top画面</p>
		</div>
        <div @click="CountCardIndex">
			<RouterLink to ='/SelectCardTop'>
				<p>次の札を入力する</p>
			</RouterLink>
		</div>
        <div>
            <p>テスト画面</p>
            <p>all_card[0]{{ all_card[0] }}</p>
            <p>card_index_count{{ card_index_count }}</p>
            <p>take_card{{ take_card }}</p>
            <p>otetsuki_user{{ otetsuki_user }}</p>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopMenu',
  computed: {
    ...mapState(['all_card']),
    ...mapState(['card_index_count']),
    ...mapState(['take_card']),
    ...mapState(['otetsuki_user'])
  },
  methods: {
    CountCardIndex () {
      this.$store.dispatch('updateCardIndex')
    }
  }
}
</script>
