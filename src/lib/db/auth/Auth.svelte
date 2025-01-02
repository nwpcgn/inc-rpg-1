<script>
	import { supabase, getUser, _user } from '../'
	import { onMount } from 'svelte'
	import Icon from '../../Icon.svelte'
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			_user.set(session.user)
		} else {
			_user.set(null)
		}
	})
	const checkUser = async () => {
		const user = await getUser()
		_user.set(user)
		console.log('checkUser', { user })
	}
	onMount(async () => checkUser())
</script>

{#if $_user}
	<aside class="fixed right-0 top-0 z-40">
		<div class="p-2">
			<button class="btn btn-circle"> <Icon icon="icon-user" /></button>
		</div>
	</aside>
{/if}
