<template>
  <div class="row">
    <div class="col-md-6 mx-auto">
      <div class="card mt-5">
        <div class="card-header">{{ event.title }}</div>
        <div class="card-body">
          <div class="card-title">@{{ event.time }} on {{ event.date }}</div>
          <ul class="list-group">
            <li class="list-group-item">
              Organized by:
              <span class="badge badge-success">{{ event.organizer }}</span>
            </li>
            <li class="list-group-item">
              Category:
              <span class="badge badge-success">{{ event.category }}</span>
            </li>
          </ul>
          <h3>Event Details</h3>
          <p>{{ event.description }}</p>
        </div>
        <div class="card-footer ">
          <BaseIcon :icon="icon">{{ event.location }}</BaseIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from '../services/EventServices'
export default {
  props: ['id'],
  data() {
    return {
      event: {},
      icon: 'fas fa-map-marker-alt mr-4'
    }
  },
  async created() {
    this.event = await EventService.getEvent(this.id)
  }
}
</script>
