<template>
	<div>
        <div class="box">
            <MatchTable></MatchTable>
            <BFloatButton></BFloatButton>
            <v-card
              class="my-3 pt-3 mx-auto elevation-1"
              outlined
              max-width="600"
              to='/BaseConfirmFinishMatch'
            >
                <p class="text-center text-secondary font-weight-light">試合終了</p>
            </v-card>
        </div>
	</div>
</template>

<script>
import MatchTable from '@/components/organisms/MatchTable'
import BFloatButton from '@/components/atoms/BFloatButton'
export default {
  name: 'MenuPage',
  components: {
    MatchTable,
    BFloatButton
  }
}
</script>
