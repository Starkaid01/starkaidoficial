exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Fala Adriano, API Serverless rodando!" })
  };
};