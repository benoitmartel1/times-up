<template>
	<div>
		<div class="content">
			<div class="container">
				<nuxt-link id="play" to="setup/players">PLAY !</nuxt-link>
				<nuxt-link id="manage"  to="manage/browse">MANAGE</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container a {
  padding: 20px;
  margin: 10px;
  background-color: yellow;
}
</style>

