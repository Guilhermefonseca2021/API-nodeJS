const jwt = require("jsonwebtoken");
// chave privada da aplicacao
const authConfig = require("../config/auth");
const { promisify } = require("util");

async function Auth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Token was not provided " });
  }

  const [, token] = authHeader.split(" ");

  try {
    // pegar tudo que ja tinha e embutir dentro da requisicao
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    request.userId = decoded.id;
    
    return next();
  } catch (error) {
    return response.status(401).json({ error: "Invalid token.  " });
  }
}

module.exports = Auth;
