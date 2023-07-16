<script lang="ts">
	import { onMount } from "svelte";
	import "svelte-material-ui/bare.css";
	import CircularProgress from "@smui/circular-progress";
	import axios from "axios";
	let todos = [];

	onMount(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos", {
				headers: {},
				params: {},
			})
			.then((res) => {
				todos = res.data;
			});
	});
</script>

<div class="text-column">
	<h1>TODOS LIST</h1>
	{#each todos as todo (todo.id)}
		<div>
			<h2>ID TASK : {todo.id}, ID UTENTE : {todo.userId}</h2>
			<p>titolo task : {todo.title}</p>
			<p>task completato ? {todo.completed}</p>
			<hr />
		</div>
	{:else}
		<div style="display: flex; justify-content: center">
			<CircularProgress style="height: 32px; width: 32px;" indeterminate />
		</div>
	{/each}
</div>

<style>
</style>
