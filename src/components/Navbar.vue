<template>
	<mdb-navbar dark>

		<mdb-navbar-brand href='/'>
			<img src='/img/logo/logo.png' height='30' alt=''>
		</mdb-navbar-brand>

		<mdb-navbar-toggler>
			<mdb-navbar-nav>

				<router-link to='/'>
					<mdb-nav-item v-bind:active='view === "Home"'>
						<!-- href='/' -->
						Home
					</mdb-nav-item>
				</router-link>

				<router-link to='/live'>
					<mdb-nav-item v-bind:active='view === "Live"'>
						Live countdown
					</mdb-nav-item>
				</router-link>

				<router-link to='/total'>
					<mdb-nav-item v-bind:active='view === "Total"'>
						Total
					</mdb-nav-item>
				</router-link>

				<router-link to='/discord'>
					<mdb-nav-item v-bind:active='view === "Discord"'>
						Discord bot
					</mdb-nav-item>
				</router-link>


				<mdb-dropdown tag='li' class='nav-item' multiLevel>
					<mdb-dropdown-toggle tag='a' navLink slot='toggle' waves-fixed>More</mdb-dropdown-toggle>
					<mdb-dropdown-menu>

						<router-link to='/fullscreen'>
							<mdb-dropdown-item>Full-screen countdown</mdb-dropdown-item>
						</router-link>

						<router-link to='/about'>
							<mdb-dropdown-item>About</mdb-dropdown-item>
						</router-link>

						<router-link to='/donate'>
							<mdb-dropdown-item>Donate</mdb-dropdown-item>
						</router-link>

						<a href='https://docs.christmascountdown.live'>
							<mdb-dropdown-item>Documentation</mdb-dropdown-item>
						</a>

						<a href='https://docs.christmascountdown.live/days-vs-sleeps'>
							<mdb-dropdown-item>Days vs sleeps</mdb-dropdown-item>
						</a>

						<a href='https://go.eartharoid.me/discord'>
							<mdb-dropdown-item>Discord server</mdb-dropdown-item>
						</a>

						<div class='dropdown-divider'></div>

						<a href='https://legacy.christmascountdown.live'>
							<mdb-dropdown-item>Legacy version</mdb-dropdown-item>
						</a>

						<div class='dropdown-divider'></div>

						<mdb-dropdown-item tag='div' class='p-0' submenu>
							<mdb-dropdown class='w-100'>
								<mdb-dropdown-item slot='toggle' submenuIcon='caret-right'>Boring stuff</mdb-dropdown-item>
								<mdb-dropdown-menu class='ml-2 rounded-0 border-0 z-depth-1'>
									<router-link to='/privacy'>
										<mdb-dropdown-item>Privacy policy</mdb-dropdown-item>
									</router-link>

									<router-link to='/terms'>
										<mdb-dropdown-item>Terms</mdb-dropdown-item>
									</router-link>

									<a href='https://github.com/christmas-countdown/docs'>
										<mdb-dropdown-item>GitHub</mdb-dropdown-item>
									</a>
								</mdb-dropdown-menu>
							</mdb-dropdown>
						</mdb-dropdown-item>

					</mdb-dropdown-menu>
				</mdb-dropdown>

			</mdb-navbar-nav>

			<mdb-navbar-nav right>
				<ul class='navbar-nav ml-auto nav-flex-icons'>
					<a href='https://go.eartharoid.me/discord'>
						<li class='nav-item'>
							<a class='nav-link waves-effect waves-light'><i class='fab fa-discord'></i></a>
						</li>
					</a>
				</ul>
			</mdb-navbar-nav>
		</mdb-navbar-toggler>
	</mdb-navbar>
</template>

<script>
	import {
	mdbNavbar,
	mdbNavbarBrand,
	mdbNavbarToggler,
	mdbNavbarNav,
	mdbNavItem,
	mdbDropdown,
	mdbDropdownMenu,
	mdbDropdownToggle,
	mdbDropdownItem,
	} from 'mdbvue';

	export default {
	name: 'Navbar',
	// props: {
	// 	view: String
	// },
	computed: {
		view () {
			return this.$route.name;
		}
	},
	components: {
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavbarToggler,
		mdbNavbarNav,
		mdbNavItem,
		mdbDropdown,
		mdbDropdownMenu,
		mdbDropdownToggle,
		mdbDropdownItem,
	}
	}
</script>

<style scoped>

</style>
