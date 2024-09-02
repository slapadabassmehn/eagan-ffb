<script>
	import { Standings } from '$lib/components'

	export let data;
	const {standingsData, leagueTeamManagersData} = data;
</script>

<style>
	.holder {
		position: relative;
		z-index: 1;
		text-align: center;
	}
</style>

<div style="text-align: center;">
	<p> Below are the sleeper standings.
		Official standings <a href="https://sites.google.com/view/effb-sup/standings">HERE</a>
	</p>
</div>
<div class="holder">
	<Standings {standingsData} {leagueTeamManagersData} />
</div>
