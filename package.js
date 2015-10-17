Package.describe({
  name: 'gwendall:useraccounts-react',
  summary: 'React component for useraccounts',
  git: 'https://github.com/gwendall/meteor-useraccounts-react.git',
  version: '0.1.0'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.2');
  api.use([
    'react@0.1.13',
    'templating@1.1.4',
  ]);
  api.addFiles('lib.jsx');
  api.export('AtFormReact');
});
