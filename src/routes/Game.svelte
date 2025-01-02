<script lang="ts">
	import RpgBackground from './_game/RpgBackground.svelte'
	import RpgEngine from './_game/RpgEngine.svelte'
	let ready = $state(false)
	function aniend() {
		ready = true
	}
</script>

<RpgBackground {aniend}></RpgBackground>

{#if ready}
	<RpgEngine></RpgEngine>
{:else}
	<div class="layer center fix">
		<div class="">
			<svg
				class="h-12 w-12 animate-spin text-slate-500 group-hover:text-slate-600 group-focus:text-slate-700"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				role="graphics-symbol"
				aria-labelledby="title-20 desc-20">
				<title id="title-20">Icon title</title>
				<desc id="desc-20"> A more detailed description of the icon </desc>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	</div>
{/if}
