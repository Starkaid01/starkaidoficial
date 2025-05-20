const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
  try {
    const { password } = JSON.parse(event.body);

    const correctPassword = process.env.ACCESS_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (!correctPassword || !jwtSecret) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Configuração do servidor incorreta.' })
      };
    }

    if (password !== correctPassword) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Senha incorreta.' })
      };
    }

    const token = jwt.sign(
      { access: 'luizgustavo' },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ token })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno', error: error.message })
    };
  }
};