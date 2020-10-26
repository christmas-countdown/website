<template>
  <mdb-navbar dark>
	
    <mdb-navbar-brand href='/'>
      <img src='/assets/img/logo/logo.png' height='30' alt=''>
    </mdb-navbar-brand>

    <mdb-navbar-toggler>	
      <mdb-navbar-nav>

		<router-link to='/'>
			<mdb-nav-item v-bind:active='view === "Home"'> <!-- href='/' -->
				Home
			</mdb-nav-item>
		</router-link>

		<router-link to='/live'>
			<mdb-nav-item v-bind:active='view === "Live"'>
				Live Countdown
			</mdb-nav-item>
		</router-link>

		<router-link to='/total'>
			<mdb-nav-item v-bind:active='view === "Total"'>
				Total
			</mdb-nav-item>
		</router-link>

		<router-link to='/discord'>
			<mdb-nav-item v-bind:active='view === "Discord"'>
				Discord Bot
			</mdb-nav-item>
		</router-link>
        

        <mdb-dropdown tag='li' class='nav-item'>
          <mdb-dropdown-toggle tag='a' navLink slot='toggle' waves-fixed>More</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            
			<router-link to='/about'>
				<mdb-dropdown-item>About</mdb-dropdown-item>
			</router-link>

			<router-link to='/donate'>
				<mdb-dropdown-item>Donate</mdb-dropdown-item>
			</router-link>

			<a href='https://docs.christmascountdown.live'>
				<mdb-dropdown-item>Documentation</mdb-dropdown-item>
			</a>

			<a href='https://go.eartharoid.me/discord'>
				<mdb-dropdown-item>Discord server</mdb-dropdown-item>
			</a>

          </mdb-dropdown-menu>
        </mdb-dropdown>

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
	mdbDropdownItem
  } from 'mdbvue';

  export default {
	name: 'Navbar',
	props: {
		view: String
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
		mdbDropdownItem
	}
  }
</script>

<style scoped>

</style>
