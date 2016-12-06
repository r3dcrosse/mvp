var server = '/twitter?';

var makeTwitterReq = (options, callback) => {
  return ($.ajax({
    url: server + 'geo=' + options + ',1mi',
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
