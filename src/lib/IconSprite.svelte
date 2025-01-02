<script>
	const icons = [
		'icon-error',
		'icon-warning',
		'icon-char',
		'icon-reload',
		'icon-close',
		'icon-edit',
		'icon-send',
		'icon-sidebar',
		'icon-storage',
		'icon-cast',
		'icon-arrow-left',
		'icon-arrow_right',
		'icon-settings',
		'icon-menu',
		'icon-user',
		'icon-save',
		'icon-explore',
		'icon-start',
		'icon-home',
		'icon-off',
		'icon-on',
		'icon-photo',
		'icon-upload'
	]
	// const iconT = (icon = 'icon-warning') => `<svg class="nwp-icon"><use xlink:href="#${icon}"></use></svg>`
</script>

<svg
	aria-hidden="true"
	style="position: absolute; width: 0; height: 0; overflow: hidden;"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<symbol id="icon-upload" viewBox="0 0 24 24">
			<title>upload</title>
			<path
				d="M5.016 14.016l6.984-7.031 6.984 7.031h-3.984v6h-6v-6h-3.984zM5.016 3.984h13.969v2.016h-13.969v-2.016z"
			></path>
		</symbol>
		<symbol id="icon-error" viewBox="0 0 24 24">
			<title>error</title>
			<path
				d="M12.984 12.984v-6h-1.969v6h1.969zM12.984 17.016v-2.016h-1.969v2.016h1.969zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"
			></path>
		</symbol>
		<symbol id="icon-warning" viewBox="0 0 24 24">
			<title>warning</title>
			<path
				d="M12.984 14.016v-4.031h-1.969v4.031h1.969zM12.984 18v-2.016h-1.969v2.016h1.969zM0.984 21l11.016-18.984 11.016 18.984h-22.031z"
			></path>
		</symbol>
		<symbol id="icon-char" viewBox="0 0 24 24">
			<title>char</title>
			<path
				d="M15.984 9h4.031v11.016h-4.031v-11.016zM3.984 20.016v-8.016h4.031v8.016h-4.031zM9.984 20.016v-16.031h4.031v16.031h-4.031z"
			></path>
		</symbol>
		<symbol id="icon-reload" viewBox="0 0 24 24">
			<title>reload</title>
			<path
				d="M12 18v-3l3.984 3.984-3.984 4.031v-3q-3.281 0-5.648-2.367t-2.367-5.648q0-2.344 1.266-4.266l1.453 1.453q-0.703 1.266-0.703 2.813 0 2.484 1.758 4.242t4.242 1.758zM12 3.984q3.281 0 5.648 2.367t2.367 5.648q0 2.344-1.266 4.266l-1.453-1.453q0.703-1.266 0.703-2.813 0-2.484-1.758-4.242t-4.242-1.758v3l-3.984-3.984 3.984-4.031v3z"
			></path>
		</symbol>
		<symbol id="icon-close" viewBox="0 0 24 24">
			<title>close</title>
			<path
				d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"
			></path>
		</symbol>
		<symbol id="icon-edit" viewBox="0 0 24 24">
			<title>edit</title>
			<path
				d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"
			></path>
		</symbol>
		<symbol id="icon-send" viewBox="0 0 24 24">
			<title>send</title>
			<path d="M2.016 21v-6.984l15-2.016-15-2.016v-6.984l21 9z"></path>
		</symbol>
		<symbol id="icon-sidebar" viewBox="0 0 24 24">
			<title>sidebar</title>
			<path
				d="M3 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM3 18v-2.016h6v2.016h-6z"
			></path>
		</symbol>
		<symbol id="icon-storage" viewBox="0 0 24 24">
			<title>storage</title>
			<path
				d="M3.984 11.016v1.969h2.016v-1.969h-2.016zM2.016 14.016v-4.031h19.969v4.031h-19.969zM6 6.984v-1.969h-2.016v1.969h2.016zM2.016 3.984h19.969v4.031h-19.969v-4.031zM3.984 17.016v1.969h2.016v-1.969h-2.016zM2.016 20.016v-4.031h19.969v4.031h-19.969z"
			></path>
		</symbol>
		<symbol id="icon-cast" viewBox="0 0 24 24">
			<title>cast</title>
			<path
				d="M0.984 9.984q4.547 0 7.781 3.234t3.234 7.781h-2.016q0-3.75-2.648-6.375t-6.352-2.625v-2.016zM0.984 14.016q2.906 0 4.969 2.039t2.063 4.945h-2.016q0-2.063-1.477-3.539t-3.539-1.477v-1.969zM0.984 18q1.219 0 2.109 0.891t0.891 2.109h-3v-3zM21 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-6.984v-2.016h6.984v-13.969h-18v3h-2.016v-3q0-0.797 0.609-1.406t1.406-0.609h18z"
			></path>
		</symbol>
		<symbol id="icon-arrow-left" viewBox="0 0 24 24">
			<title>arrow-left</title>
			<path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"
			></path>
		</symbol>
		<symbol id="icon-arrow_right" viewBox="0 0 24 24">
			<title>arrow_right</title>
			<path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"
			></path>
		</symbol>
		<symbol id="icon-settings" viewBox="0 0 24 24">
			<title>settings</title>
			<path
				d="M15 9v-6h2.016v2.016h3.984v1.969h-3.984v2.016h-2.016zM21 12.984h-9.984v-1.969h9.984v1.969zM6.984 9h2.016v6h-2.016v-2.016h-3.984v-1.969h3.984v-2.016zM12.984 21h-1.969v-6h1.969v2.016h8.016v1.969h-8.016v2.016zM3 5.016h9.984v1.969h-9.984v-1.969zM3 17.016h6v1.969h-6v-1.969z"
			></path>
		</symbol>
		<symbol id="icon-menu" viewBox="0 0 24 24">
			<title>menu</title>
			<path
				d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"
			></path>
		</symbol>
		<symbol id="icon-user" viewBox="0 0 24 24">
			<title>user</title>
			<path
				d="M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016h-16.031v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"
			></path>
		</symbol>
		<symbol id="icon-save" viewBox="0 0 24 24">
			<title>save</title>
			<path
				d="M17.016 3q0.797 0 1.383 0.609t0.586 1.406v15.984l-6.984-3-6.984 3v-15.984q0-0.797 0.586-1.406t1.383-0.609h10.031z"
			></path>
		</symbol>
		<symbol id="icon-explore" viewBox="0 0 24 24">
			<title>explore</title>
			<path
				d="M14.203 14.203l3.797-8.203-8.203 3.797-3.797 8.203zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM12 10.922q0.469 0 0.773 0.305t0.305 0.773-0.305 0.773-0.773 0.305-0.773-0.305-0.305-0.773 0.305-0.773 0.773-0.305z"
			></path>
		</symbol>
		<symbol id="icon-start" viewBox="0 0 24 24">
			<title>start</title>
			<path
				d="M18.984 18.984v-3.984h-3.984v3.984h3.984zM12.984 12.984h8.016v8.016h-8.016v-8.016zM18.984 9v-3.984h-3.984v3.984h3.984zM12.984 3h8.016v8.016h-8.016v-8.016zM9 18.984v-3.984h-3.984v3.984h3.984zM3 12.984h8.016v8.016h-8.016v-8.016zM9 9v-3.984h-3.984v3.984h3.984zM3 3h8.016v8.016h-8.016v-8.016z"
			></path>
		</symbol>
		<symbol id="icon-home" viewBox="0 0 24 24">
			<title>home</title>
			<path d="M12 3l8.016 6v12h-5.016v-6.984h-6v6.984h-5.016v-12z"></path>
		</symbol>
		<symbol id="icon-off" viewBox="0 0 24 24">
			<title>off</title>
			<path
				d="M19.688 16.594l-13.172-13.172 5.484-2.438 9 4.031v6q0 2.859-1.313 5.578zM22.266 21.75l-1.266 1.266-3.422-3.422q-2.438 2.672-5.578 3.422-3.844-0.938-6.422-4.383t-2.578-7.617v-6l-2.016-2.016 1.266-1.266 5.203 5.203t6.094 6.070 5.203 5.18z"
			></path>
		</symbol>
		<symbol id="icon-on" viewBox="0 0 24 24">
			<title>on</title>
			<path
				d="M12 0.984l9 4.031v6q0 4.172-2.578 7.617t-6.422 4.383q-3.844-0.938-6.422-4.383t-2.578-7.617v-6z"
			></path>
		</symbol>
		<symbol id="icon-photo" viewBox="0 0 24 24">
			<title>photo</title>
			<path
				d="M20.016 5.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.844-0.586 1.43t-1.383 0.586h-16.031q-0.797 0-1.383-0.586t-0.586-1.43v-12q0-0.797 0.586-1.383t1.383-0.586h3.188l1.828-2.016h6l1.828 2.016h3.188zM20.016 18.984v-12h-16.031v12h16.031zM14.016 12l-3 3.703-2.016-2.719-3 4.031h12z"
			></path>
		</symbol>
		<symbol id="bootstrap" viewBox="0 0 118 94">
			<title>Bootstrap</title>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
			></path>
		</symbol>
	</defs>
</svg>
