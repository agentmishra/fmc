<template>
  <Navbar>
    <a href="/fmc/javascript">JavaScript Mini Challenges</a>
    <a href="/fmc/react/">React Mini Challenges</a>
  </Navbar>

  <div className="container text-center">
    <ChallengeGrid />
  </div>
</template>

<script setup lang="ts">
import ChallengeGrid from '@/components/ChallengeGrid.vue';
import Navbar from '@/components/Navbar.vue';
</script>
