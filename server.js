const app = require('./app')()

// Run the server!
app.listen(3000, (err, address) => {
  if (err) throw err
  app.log.info(`server listening on ${address}`)
})
