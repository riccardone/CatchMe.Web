export const AUTH_CONFIG = {
  domain: 'catchmeapp.eu.auth0.com',
  clientId: 'lpVF3QG7P586NprCEdlQrY8GQVETGHsj',    
  callbackUrl: process.env.NODE_ENV === 'production' ? 'https://www.catchme.info/callback' : 'http://localhost:3000/callback'
};
