// functions/1-hello.js
exports.handler = async (event, context, cb) => {
  console.log(context);
  return {
    statusCode: 200,
    body: "Our First Netlify Function Example"
  };
};
//# sourceMappingURL=1-hello.js.map
