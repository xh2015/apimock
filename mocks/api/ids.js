module.exports = function (data, util) {

  return {
    //mock delay 100 milliseconds
    $$delay:500,

    //mock response header
    $$header:{
        'X-Access-Token':"aaaaa",
        'Cache-Control':'max-age=10'
    },

    //mock response data.
    userIds: [
      1, 2, 3, 4
    ],
    msg: "success"
  };
};
