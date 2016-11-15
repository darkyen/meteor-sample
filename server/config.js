ServiceConfiguration.configurations.remove({
    service: 'auth0'
});

ServiceConfiguration.configurations.insert({
    service: 'auth0',
    client_id: 'CLIENT_ID',
    secret: 'CLIENT_SECRET',
    domain: 'CLIENT_DOMAIN'
});
