```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor Useraccounts React
=========================

React component for useraccounts.

Installation
------------

``` sh
meteor add gwendall:useraccounts-react
```

How it works
-----------

1. Add this package **after** your useraccounts package (useraccounts:unstyled, useraccounts:bootstrap, etc.).

2. Drop the `<AtFormReact />` component. Pass it any parameter you would pass to the good old `{{> atForm}}` Blaze template.

  ```javascript
  Page = React.createClass({
    render() {
      return <AtFormReact state="signIn" />
    }
  });
  ```

3. Enjoy!
