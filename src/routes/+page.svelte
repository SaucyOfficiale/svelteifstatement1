<style>#ui { width: 50px; border: 15px solid green; padding: 50px; color: #000; margin: 20px;}</style>
<div id="ui"></div>
<script>
	import { onMount } from 'svelte'; 
  let mediumnavbar = false; 
  onMount(() => { mediumnavbar = localStorage.getItem('mediumnavbar') === 'true';  });

</script>

{#if mediumnavbar}<style>#ui {height: 100px;}</style>{/if}


				  <div class="switch">
          <input type="checkbox" class="form-check-input" id="mediumnavbar" on:click={() => { mediumnavbar = !mediumnavbar; localStorage.setItem('mediumnavbar', mediumnavbar); }} />
          <label class="custom-control-label" for="mediumnavbar">Medium</label>
        </div><br>