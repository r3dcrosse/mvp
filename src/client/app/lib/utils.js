var server = '/twitter?';

var makeTwitterReq = (options, callback) => {
  console.log('OPTIONS::::', options);
  return ($.ajax({
    url: server + 'geo=' + options,
    type: 'GET',
    success: (data) => {
      console.log('DATA FROM SERVER::::', data.statuses);
      callback(data.statuses);
    },
    error: (data) => {
      console.error(data);
    }
  }));
};

window.makeTwitterReq = makeTwitterReq;
