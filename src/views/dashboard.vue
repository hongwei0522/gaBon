<template>
  <div class="font-semibold text-3xl my-5">佈告欄</div>

  <div class="flex flex-col gap-7">
    <div class="flex flex-wrap gap-7">
      <MiniStatCardWidget />
    </div>
    <OverviewWidget />
    <div class="flex flex-wrap gap-7">
      <SocialMediaUsersWidget />
      <OrdersWidget />
      <SocialMediaRevenueWidget />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
