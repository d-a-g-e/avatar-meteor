FS.debug = true
Meteor.publish("images", function() {
  return Images.find();
});
Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});