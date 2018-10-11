export const AUTH_CONFIG = {
  domain: 'eventstore-monitor.eu.auth0.com',
  clientId: '76QniNdrwEXEiudPw5npaPZP3Xi0t7q4',    
  callbackUrl: process.env.NODE_ENV === 'production' ? 'http://www.catchme.info/callback' : 'http://localhost:3000/callback'
};
