const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
  const { password } = JSON.parse(event.body);

  const correctPassword = process.env.ACCESS_PASSWORD;

  if (password !== correctPassword) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Senha incorreta.' })
    };
  }

  // Gera token JWT (válido por 1 hora)
  const token = jwt.sign(
    { access: 'luizgustavo' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ token })
  };
};