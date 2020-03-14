<template>
  <div class="row">
    <div class="col-md-6 mx-auto">
      <router-link :to="{ name: 'event-show', params: { id: event.id } }">
        <div class="card my-4 shadow">
          <div class="card-header">{{ event.title }}</div>
          <div class="card-body">
            <p>@{{ event.time }} on {{ event.date }}</p>
          </div>
          <div class="card-footer  ">
            <BaseIcon :icon="icon"
              >{{ event.attendees.length }} attending</BaseIcon
            >
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  data() {
    return {
      icon: 'fas fa-user mr-4'
    }
  }
}
</script>
