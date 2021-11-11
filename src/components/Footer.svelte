<script>
	import '../app.css';
	let year = new Date().getFullYear();
</script>

<footer
	class="mt-16 p-8 backdrop-filter backdrop-blur-lg backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg shadow-xl"
>
	<div class="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
		<div>
			<h5 class="font-bold text-gray-400">Information</h5>
			<ul>
				<li><a href="/about" class="hover:underline">About</a></li>
				<li><a href="https://docs.christmascountdown.live/other/days-vs-sleeps" class="hover:underline">Days vs sleeps</a></li>
				<li><a href="/donate" class="hover:underline">Donate</a></li>
			</ul>
		</div>
		<div>
			<h5 class="font-bold text-gray-400">Useful links</h5>
			<ul>
				<li><a href="https://go.eartharoid.me/discord" class="hover:underline">Discord server</a></li>
				<li><a href="https://docs.christmascountdown.live" class="hover:underline">Documentation</a></li>
				<li><a href="https://github.com/christmas-countdown" class="hover:underline">GitHub</a></li>
			</ul>
		</div>
		<div>
			<h5 class="font-bold text-gray-400">Legal</h5>
			<ul>
				<li><a href="/terms" class="hover:underline">Terms of service</a></li>
				<li><a href="/privacy" class="hover:underline">Privacy policy</a></li>
				<li><a href="/cookies" class="hover:underline">Cookies policy</a></li>
			</ul>
		</div>
	</div>
	<p class="text-gray-400 text-center">
		Christmas Countdown by eartharoid <br />
		&copy; 2017-{year}
		<a href="https://eartharoid.me" class="font-semibold hover:underline">Isaac Saunders</a>
	</p>
</footer>
