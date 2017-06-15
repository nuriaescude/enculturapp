const angular = require('angular')
const angularRoute = require("angular-route");

const configRouteLanding = require('./landing')

const configRouteAdmin = require('./admin')
const AdminController = require('./admin/AdminController')

const configRouteSetMood = require('./setMood')
const ExposMoodController = require('./setMood/ExposMoodController')

const configRouteListExpos = require('./listExpos')
const ListExposController = require('./listExpos/ListExposController')

const configRouteDetailExpo = require('./detailExpo')
const ExpoDetailsController = require('./detailExpo/ExpoDetailsController')

const configRouteProfile = require('./profile')
const UserProfileController = require('./profile/UserProfileController')

const configRouteRegister = require('./register')
const RegisterController = require('./register/RegisterController')

const configRouteLogin = require('./login')
const LoginController = require('./login/LoginController')

const configRouteLogout = require('./logout')
const LogoutController = require('./logout/LogoutController')

angular.module('mainAppRoutes', [ angularRoute ])

  // Route /
  .config( configRouteLanding )

  // Route /admin
  .controller('AdminController', AdminController)
  .config( configRouteAdmin )

  // Route /setMood
  .controller('ExposMoodController', ExposMoodController)
  .config( configRouteSetMood )

  // Route /listExpos
  .controller('ListExposController', ListExposController)
  .config( configRouteListExpos )

  // Route /DetailExpo
  .controller('ExpoDetailsController', ExpoDetailsController)
  .config( configRouteDetailExpo )
  
  // Route /Profile
  .controller('UserProfileController', UserProfileController)
  .config( configRouteProfile )

  // Route /register
  .controller('RegisterController', RegisterController)
  .config( configRouteRegister )

  // Route /login
  .controller('LoginController', LoginController)
  .config( configRouteLogin )

  // Route /logout
  .controller('LogoutController', LogoutController)
  .config( configRouteLogout )

module.exports = 'mainAppRoutes'