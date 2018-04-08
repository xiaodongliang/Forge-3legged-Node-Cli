
module.exports = { 
    callbackURL: process.env.BOX_CALLBACK_URL || 'http://localhost:1234/token/forgeoauth',
    credentials: {
      client_id: process.env.BOX_CLIENT_ID || '<your client_id>',
      client_secret: process.env.BOX_CLIENT_SECRET || '<your client_secret>' 
    },
    scope: ['data:read', 'data:write', 'data:create', 'data:search'] 
};

