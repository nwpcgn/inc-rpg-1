<script>
	import { _user, signIn } from '../'
	// import { sleep } from '../../'
	let { size = '320' } = $props()
	let email = $state('')
	let password = $state('')

	const submitForm = async () => {
		const data = await signIn({ email, password })
		if (data) {
			console.log({ login: data })
			return data
		}
	}
</script>

<article class="content" style="--page-width: {size}px;">
	<form
		on:submit|preventDefault={submitForm}
		class="card bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Sign In</h2>
			<div class="flex flex-col gap-4 py-2">
				<input
					type="email"
					bind:value={email}
					required
					placeholder="email"
					class="input input-bordered" />
				<input
					type="password"
					bind:value={password}
					required
					placeholder="password"
					class="input input-bordered" />
			</div>
			<div class="card-actions justify-end">
				<button type="submit" class="btn btn-neutral">Anmelden</button>
			</div>
		</div>
	</form>
</article>
