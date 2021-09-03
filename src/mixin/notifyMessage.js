export const notifyMessageMixin = {
    methods: {
      
      notifyPositive (message, position = 'top-right') {
        this.$q.notify({
          type: 'positive',
          message,
          position
        })
      },
      
      notifyNegative (message, position = 'top-right') {
        this.$q.notify({
          type: 'negative',
          message,
          position
        })
      }
    }
  }