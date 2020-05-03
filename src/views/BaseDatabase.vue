<template>
	<div>
        <div class="box">
            <DatabaseTable/>
        </div>
	</div>
</template>

<script>
import DatabaseTable from '@/components/organisms/DatabaseTable'
export default {
  name: 'TopDatabse',
  components: {
    DatabaseTable
  }
}
</script>
