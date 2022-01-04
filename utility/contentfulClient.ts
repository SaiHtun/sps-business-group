const contentful = require("contentful");

var client = contentful.createClient({
  space: process.env.spaceId,
  accessToken: process.env.accessId,
});

export default client;