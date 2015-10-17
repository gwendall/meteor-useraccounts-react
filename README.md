Meteor Useraccounts React
=========================

React component for useraccounts.

Installation
------------

``` sh
meteor add gwendall:useraccounts-react
```

How to
------

1. Add this package *right after* your useraccounts package (useraccounts-unstyled, useraccounts-bootstrap, etc.).

2. Use the `<AtFormReact />` component. Pass it any parameter you would pass to the good old {{> atForm}} Blaze template.

```javascript
Page = React.createClass({
  render() {
    return <AtFormReact state="signIn" />
  }
});
```

3. Enjoy!
