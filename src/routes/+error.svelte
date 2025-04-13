<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="full-height mx-4 grid place-items-center">
	<h1 class="text-center">{page.error?.message}</h1>
</div>

<style>
	.full-height {
		height: calc(100dvh - 145px);
	}
</style>
