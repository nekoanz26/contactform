Package.describe({
  name: 'nekoanz:contactform',
  summary: 'Simple drop-in contact form with validation',
  version: '0.0.1',
  git: 'https://github.com/nekoanz26/contactform'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");

    api.use([
      'templating',
      'jquery',
      'coffeescript',
      'underscore',
      'less@1.0.0 || 2.5.0',
      'session',
      'check',
      'chrismbeckett:fontawesome4@4.2.1',
      'mizzao:bootstrap-3@3.2.0_1',
      'rgoomar:bootstrap-validator@0.5.2'
    ], 'client');

    api.use(['email'], 'server');

    api.addFiles([
      'server/contactConfig.js',
      'server/contactForm.js'
    ], 'server');

    api.addFiles([
      'client/contact.less',
      'client/contact.html',
      'client/contact.coffee'
    ], 'client');

    api.export([
      'contactFormConfig'
    ], 'server');

});
