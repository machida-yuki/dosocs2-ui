Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  //route for root
  this.route('home', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('items'),
        Meteor.subscribe('uploads')
      ];
    },
    data: function() {
      return {
        item: Items.findOne(),
        uploads: Uploads.find()
      }
    }
  });
   //Route for profile
   this.route('profile', {
    path: '/profile'
  });
});

