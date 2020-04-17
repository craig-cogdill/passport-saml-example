module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        //entryPoint: process.env.SAML_ENTRY_POINT || 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://dev-862160.okta.com/app/logrhythmdev862160_ssosamlpoc_1/exk97qbvl1zWHgldg4x6/sso/saml',
        //issuer: 'passport-saml',
        issuer: 'http://www.okta.com/exk97qbvl1zWHgldg4x6',
        cert: process.env.SAML_CERT || null
      }
    }
  }
};
