import supabase from './supabase'
import _user from './_user'
import _profil from './_profil'

const signIn = async ({ email, password }) => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})
		if (error) throw new Error('Sign In failed')
		if (data) return data
	} catch (error) {
		console.error(error)
	}
}

const signOut = async () => {
	try {
		let { error } = await supabase.auth.signOut()
		if (!error) return true
		else throw new Error('logout failed')
	} catch (error) {
		alert(error)
	}
}

async function getUser() {
	const {
		data: { user }
	} = await supabase.auth.getUser()
	if (user) return user
	else return null
}

const fetchDb = async (options = {}) => {
	try {
		let req = supabase
			.from(options.db)
			.select(options.keys ? options.keys : '*')
		if (options.userid) req.eq('user_id', options.userid)
		if (options.od) req.order(options.od, { ascending: options.ascending })

		const { data, error } = await req
		if (data) return data
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}

// @index('./auth/*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)

// @endindex
export { default as Auth } from './auth/Auth.svelte'
export { default as SignIn } from './auth/SignIn.svelte'
export { default as SignOut } from './auth/SignOut.svelte'
export { supabase, signIn, signOut, getUser, fetchDb, _user, _profil }

/*  
supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') _user.set(session.user)
		else _user.set(null)
	})
*/
