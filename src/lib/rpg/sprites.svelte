<script>
	import Buildings from './buildings.svelte'
	const icons = [
		'rpg-add',
		'rpg-settings',
		'rpg-alarm',
		'rpg-alert',
		'rpg-upgrades',
		'rpg-res',
		'rpg-menu',
		'rpg-close',
		'rpg-build',
		'rpg-exit',
		'rpg-start',
		'rpg-buildings',
		'rpg-worker',
		'rpg-battle',
		'rpg-home'
	]
</script>

<Buildings></Buildings>
<svg
	aria-hidden="true"
	style="position: absolute; width: 0; height: 0; overflow: hidden;"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<symbol id="rpg-battle" viewBox="0 0 32 32">
			<title>battle</title>
			<path
				d="M14.586 20.243l2.828 2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828 2.828 2.828 11.313-11.315 2.828 2.828-11.313 11.315z"
			></path>
		</symbol>
		<symbol id="rpg-home" viewBox="0 0 32 32">
			<title>home</title>
			<path d="M8 28v-15l8-9 8 9v15h-16z"></path>
		</symbol>
		<symbol id="rpg-add" viewBox="0 0 32 32">
			<title>add</title>
			<path d="M24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>
		</symbol>
		<symbol id="rpg-settings" viewBox="0 0 32 32">
			<title>settings</title>
			<path
				d="M26 8v4h-4v4h-4v-4h-12v-4h12v-4h4v4h4zM14 16h-4v4h-4v4h4v4h4v-4h12v-4h-12v-4z"
			></path>
		</symbol>
		<symbol id="rpg-alarm" viewBox="0 0 32 32">
			<title>alarm</title>
			<path d="M26 20v4h-8v4h-4v-4h-8v-4h4v-12h4v-4h4v4h4v12h4z"></path>
		</symbol>
		<symbol id="rpg-alert" viewBox="0 0 32 32">
			<title>alert</title>
			<path d="M18 4v16h-4v-16h4zM14 28h4v-4h-4v4z"></path>
		</symbol>
		<symbol id="rpg-upgrades" viewBox="0 0 32 32">
			<title>upgrades</title>
			<path d="M28 12v16h-24v-12h4v-12h8v16h4v-4h4v-4h4z"></path>
		</symbol>
		<symbol id="rpg-res" viewBox="0 0 32 32">
			<title>res</title>
			<path d="M24 12v-8h-16v8.060l-4-0.005v15.945h24v-16h-4zM20 12h-8v-4h8v4z"
			></path>
		</symbol>
		<symbol id="rpg-menu" viewBox="0 0 32 32">
			<title>menu</title>
			<path d="M8 18h16v4h-16v-4zM8 10v4h16v-4h-16z"></path>
		</symbol>
		<symbol id="rpg-close" viewBox="0 0 32 32">
			<title>close</title>
			<path
				d="M18.828 16l4.243 4.243-2.828 2.828-4.243-4.243-4.243 4.243-2.828-2.828 4.243-4.243-4.243-4.243 2.828-2.828 4.243 4.243 4.243-4.243 2.828 2.828-4.243 4.243z"
			></path>
		</symbol>
		<symbol id="rpg-build" viewBox="0 0 32 32">
			<title>build</title>
			<path
				d="M26.2 28.2l-14.9-14.9-5.6 5.7-2.8-2.8 4.2-4.2-2.8-2.9 5.7-5.7 2.8 2.8 4.2-4.2 2.8 2.8-5.7 5.7 14.9 14.8-2.8 2.9z"
			></path>
		</symbol>
		<symbol id="rpg-exit" viewBox="0 0 32 32">
			<title>exit</title>
			<path
				d="M19.828 7.515l-2.828 2.828 3.657 3.657h-6.657v-10h-10v4h6v16h-6v4h10v-10h6.657l-3.657 3.657 2.828 2.828 8.486-8.485-8.486-8.485z"
			></path>
		</symbol>
		<symbol id="rpg-start" viewBox="0 0 32 32">
			<title>start</title>
			<path
				d="M14 14h4v4h-4v-4zM6 26h4v-4h-4v4zM22 18h4v-4h-4v4zM14 26h4v-4h-4v4zM6 10h4v-4h-4v4zM14 10h4v-4h-4v4zM22 6v4h4v-4h-4zM22 26h4v-4h-4v4zM6 18h4v-4h-4v4z"
			></path>
		</symbol>
		<symbol id="rpg-buildings" viewBox="0 0 32 32">
			<title>buildings</title>
			<path
				d="M14 4v4h-8v20h20v-24h-12zM14 24h-4v-4h4v4zM14 16h-4v-4h4v4zM22 20h-4v-4h4v4zM22 12h-4v-4h4v4z"
			></path>
		</symbol>
		<symbol id="rpg-worker" viewBox="0 0 32 32">
			<title>worker</title>
			<path d="M22 21h-4v-4l4-4v-6l-4-4h-4l-4 4v6l4 4v4h-4l-4 4v7h20v-7z"
			></path>
		</symbol>
	</defs>
</svg>
