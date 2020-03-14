<template>
  <div>
    <div v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard'
import EventService from '../services/EventServices'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  async created() {
    this.events = await EventService.getEvents()
  }
}
</script>
