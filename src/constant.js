// function defaults(check, overrides) {
//   const clone = { ...check };

//   Object.keys(overrides).forEach((key) => {
//     if (!check[key]) {
//       clone[key] = overrides[key];
//     }
//   });

//   return clone;
// }

export default Object.freeze(process.env);
