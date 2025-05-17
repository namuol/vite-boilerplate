# Web project boilerplate

My opinionated web project boilerplate. You probably don't want to use this.

## UseGPU

### Notes

Note the `overrides` section of package.json. I was getting typescript errors
that suggested conflicting versions of `@lezer/common`, and indeed package-lock
showed two versions (1.0.0 and 1.1.0).

Explicitly overriding to use `1.1.0` fixed these issues.
