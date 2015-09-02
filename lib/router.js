// Router.route('/', {name: 'welcome'});

Router.route('/profile', {name: 'profile'});
Router.route('/the_end', {name: 'theEnd'});

Router.configure({
  layoutTemplate: 'layout'
});

// Login and Register Routes
AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'siteLogin',
});
AccountsTemplates.configureRoute('signUp', {
    name: 'register',
    path: '/register',
    template: 'siteRegister',
    redirect: '/',
});


Router.route('/', {
  name: 'welcome',
  layoutTemplate: 'layout',
  onBeforeAction: function (pause) {
      if (Meteor.user()) {
        Router.go('/profile'); // send user to profile
      } else {
        this.next();        // continue to welcome page
      }
    }
});