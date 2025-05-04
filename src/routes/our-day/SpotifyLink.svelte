<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { env } from '$env/dynamic/public';
</script>

<Button variant="link" class="pr-0 pt-0" href={env.PUBLIC_SPOTIFY_INVITE_URL}
	>Spotify playlist</Button
>
