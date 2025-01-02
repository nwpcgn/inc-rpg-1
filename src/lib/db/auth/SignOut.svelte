<script lang="ts">
	import { signOut, _user } from '../'
	// function dispatch(type) {
	// 	$host().dispatchEvent(new CustomEvent(type));
	// }
</script>

<button class="btn btn-outline btn-error btn-lg btn-block" on:click={signOut}>
	<slot>Logout</slot>
</button>
