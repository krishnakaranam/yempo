const request = require('request-promise');

const payload = {  
  queryTerm: '1837718075',
  searchType: 'user'
}
  const userFieldSet = 'id, name, about, email, accounts, link, is_verified, significant_other, relationship_status, website, picture, photos, feed, friends, friendlists, groups, permissions';

  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/v2.8/1837718075`,
    qs: {
      access_token: "EAAcMKZB8fbaMBAIiFPPOytSicFbyvfFt0SVHSIVzsnbYr4mfeYaEH2AEeJj7KparHUlkMNMFjtQgtiGxG6PNNtIuBnDPdyYoQ2BTCwzh988KNwwHTl0aSNQwPZBoZBmdt81XklVmqZCOhxTYbZAxfW1Wdp84EMP2vtrSVtdcjnAZDZD",
      fields: userFieldSet
    }
  };

  console.log("ok");

  request(options)
    .then(fbRes => {
      console.log(JSON.stringify(fbRes));
    });
