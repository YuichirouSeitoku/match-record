<template>
    <div class="columns">
        <div class="column">
            <RouterLink to ='/SelectOneCharacter'>
                <div class="box">
                    <p>一字決まり</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectTwoCharacter'>
                <div class="box">
                    <p>二字決まり</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectThreeCharacter'>
                <div class="box">
                    <p>三字決まり</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectFourCharacter'>
                <div class="box">
                  <p>四字決まり</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectFiveSixCharacter'>
                <div class="box">
                    <p>み、た、こ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectSevenCharacter'>
                <div class="box">
                    <p>お、わ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectEightCharacter'>
                <div class="box">
                    <p>な</p>
                </div>
            </RouterLink>
        </div>

        <div class="column">
            <RouterLink to = '/SelectSixteenCharacter'>
                <div class="box">
                    <p>あ</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SelectTagTop'
}
</script>
