<template>
<div v-if="showAddTask">
    <AddTask @add-task="addTask" />
</div>  
<Tasks :tasks="tasks" @remove-task="removeTask"/>  
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
export default {
     components: {
       Tasks,
       AddTask,  
},
props: {
    showAddTask: Boolean
},
data() {
    return {
        tasks: [],
    }
},
methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
          },
        body: JSON.stringify(task),
      })
      const data = await res.json()
      this.tasks = [...this.tasks,task]
    },
    async removeTask(id) {
      if(confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',        
      })
      res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id != id)) : alert('Error deleting task')
        
      }
    },  
    async fetchTasks() {
      const res = await fetch(`api/tasks/{id}`)
      const data = await res.json()
      return data;
    },
     async fetchTasks(id) {
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data;
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }

}
</script>

<style>

</style>