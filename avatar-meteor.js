// cfs:graphicsmagick: Adds `gm` to scope with the ability to perform GraphicsMagick or ImageMagick manipulation

  // tamañ
  //   var size = '160';
  //   gm(readStream).autoOrient().resize(size, size + '^').gravity('Center').extent(size, size).stream('jpg').pipe(writeStream);
  // };

  // var thumbStore = new FS.Store.FileSystem("uploads", {path:'/home/daniel/meteor_apps/leaderboard/projectUploads', transformWrite: thumbito });

  // Uploads = new FS.Collection("uploads", { stores: [thumbStore] });

  // Images = new FS.Collection("images", {
  //   stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
  // });

if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
