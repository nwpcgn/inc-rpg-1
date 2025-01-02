<script lang="ts">
	import { onMount } from 'svelte'

	let { gray = false, active = false, aniend } = $props()

	onMount(() => {
		active = true

		return () => {
			active = false
		}
	})
</script>

<picture
	class="layer bg-slate-100"
	transition-style={active ? 'in' : 'out'}
	onanimationend={aniend}>
	<img
		class="block h-full w-full object-cover object-center transition-all delay-200 duration-700 ease-in-out"
		class:grayscale={!gray}
		sizes="(max-width: 1289px) 100vw, 1289px"
		srcset="
		img/pxbg1_gvcgwv_c_scale,w_300.png   300w,
		img/pxbg1_gvcgwv_c_scale,w_643.png   643w,
		img/pxbg1_gvcgwv_c_scale,w_920.png   920w,
		img/pxbg1_gvcgwv_c_scale,w_1139.png 1139w,
		img/pxbg1_gvcgwv_c_scale,w_1289.png 1289w
	  "
		src="img/pxbg1_gvcgwv_c_scale,w_1289.png"
		alt="" />
</picture>

<style>
	@keyframes circle-in-hesitate {
		0% {
			clip-path: circle(0%);
		}
		40% {
			clip-path: circle(40%);
		}
		100% {
			clip-path: circle(125%);
		}
	}

	[transition-style='in'] {
		animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-hesitate both;
	}
</style>
