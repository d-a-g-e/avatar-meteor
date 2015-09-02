FS.debug = true
Template.profile.events({
  'keyup .name': function(e, template){
    console.log(e.target.value)
    value = e.target.value
    $('.profile-name').html(value)
  },
  'keyup .description': function(e, template){
    console.log(e.target.value)
    value = e.target.value
    // console.log()
    $('.profile-description').html(value)
  },
  'change .fileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      var fsFile = new FS.File(file);
        // Note that you will want to verify this owner metadata in a deny function
        // since the client could put any user ID there.
      fsFile.metadata = {owner: Meteor.userId()};
      Images.insert(fsFile, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  },
  'submit form': function(e, template) {
    e.preventDefault();
    userProperties = {
      name: template.find('.name').value,
      description: template.find('.description').value
    }

    Meteor.users().update(Meteor.userId, {$set: userProperties}, function(error) {
      if (error) {p
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('/theend');
      }
    });
  }
});

Template.profile.helpers({
  userEmail: function () {
    // usuario = Users.find(_id: Meteor.userId())
    return "Meteor.user().emails[0].address no me funciona";
    // solo quiero un emails 
    // return Meteor.user().emails[0].address
  },
  avatarImage: function(){
    imagen = Images.findOne({"metadata" :{'owner': Meteor.userId()}});
    if ( imagen === undefined) {
        imagen = "default-profile.png"
    } else{
        imagen = imagen.url()
    };
    return imagen;
  }
});