<template>
	<div class="main_container">
		<div>
			<RouterLink to ='/SelectOneCharacter'>
				<p>一字決まり</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectTwoCharacter'>
				<p>二字決まり</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectThreeCharacter'>
				<p>三字決まり</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectFourCharacter'>
				<p>四字決まり</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectFiveSixCharacter'>
				<p>み、た、こ</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectSevenCharacter'>
				<p>お、わ</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectEightCharacter'>
				<p>な</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/SelectSixteenCharacter'>
				<p>あ</p>
			</RouterLink>
		</div>
	</div>
</template>

<script>
export default {
  name: 'SelectTagTop'
}
</script>
