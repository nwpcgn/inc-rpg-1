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
	<div class="content">
		<header class="flex justify-around py-8">
			<span>
				<img src={viteLogo} class="logo" alt="Vite Logo" />
			</span>
			<span>
				<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
			</span>
		</header>
		<h1>Vite + Svelte</h1>

		<div class="card">
			<Counter />
		</div>

		<p>
			Check out <a
				href="https://github.com/sveltejs/kit#readme"
				target="_blank"
				rel="noreferrer">SvelteKit</a
			>, the official Svelte app framework powered by Vite!
		</p>

		<!-- Component: One Line List -->
		<ul class="divide-y divide-slate-100">
			<li class="flex items-start gap-4 px-4 py-3">
				<div
					class="flex min-h-[2rem] flex-col items-start justify-center gap-0">
					<h4 class="text-base text-slate-700">Faster Development</h4>
				</div>
			</li>
		</ul>
		<!-- End One Line List -->
	</div>
</div>
