<script lang="ts">
	import { link } from 'svelte-spa-router'
	import svelteLogo from '../assets/svelte.svg'
	import viteLogo from '/vite.svg'
	import Counter from '../lib/Counter.svelte'
	const nav = [
		{ name: 'Start', href: '/', icon: 'icon-start' },
		{ name: 'Game', href: '/game', icon: 'icon-game' },
		{ name: 'Settings', href: '/settings', icon: 'icon-settings' }
	]
</script>

<div class="layer nwp">
	<div class="content text-center">
		<header class="flex justify-around py-8">
			<span>
				<img src={viteLogo} class="logo" alt="Vite Logo" />
			</span>
			<span>
				<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
			</span>
		</header>
		<article class="space-y-4">
			<h1 class="text-4xl font-extrabold">Vite + Svelte</h1>

			<div class="text-xl">
				<Counter />
			</div>

			<div class="text-center">
				<!-- Component: Large primary elevated button -->
				<a
					href="/game"
					use:link
					class="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-slate-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-slate-200 transition duration-300 hover:bg-slate-600 hover:shadow-md hover:shadow-slate-200 focus:bg-slate-700 focus:shadow-md focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none">
					<span class="text-xl font-semibold">Elevated large</span>
				</a>
				<!-- End Large primary elevated button -->
			</div>
		</article>
	</div>
</div>
