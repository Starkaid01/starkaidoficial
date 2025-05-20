const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
  const { token } = JSON.parse(event.body);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, decoded })
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ valid: false, error: 'Token inválido' })
    };
  }
};