function defaults(check, overrides) {
  const clone = { ...check };

  Object.keys(overrides).forEach((key) => {
    if (!check[key]) {
      clone[key] = overrides[key];
    }
  });

  return clone;
}

export default Object.freeze(defaults(process.env, {
  APP_URL: 'http://localhost:8080',
}));
