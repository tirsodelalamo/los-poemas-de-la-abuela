module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/api', require('./auth.routes'))
  app.use("/api/perfil", require("./poetry.routes"));
}
