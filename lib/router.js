Router.configure({

    layoutTemplate: 'layout',
    waitOn: function() { Meteor.subscribe('posts'); }

});

Router.route('/', {name: 'postsList'});