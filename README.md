# Bug description

When using validateAsync to validate an embedded model instance, we get an error about the relation attribute containing "invalid item: ('undefined' undefined)".

I think the problem comes from here: https://github.com/strongloop/loopback-datasource-juggler/blob/master/lib/validations.js#L504

# Step to reproduce

- `npm install`
- `node .`
- Watch the logs.