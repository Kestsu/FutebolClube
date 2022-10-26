// const passwordValidation = (req, res, next) => {
//   const talkerPost = req.body;
//   const senhas = ['password'];
//   const senha = senhas.every((property) => property in talkerPost);
//   const isValid = talkerPost.password && talkerPost.password.length >= 6;
//   if (!senha) {
//     return res.status(400).json({
//       message: 'O campo "password" é obrigatório',
//     });
//   }
  
//   if (isValid === false) {
//     console.log(senha);
//     return res.status(400).json({
//       message: 'O "password" deve ter pelo menos 6 caracteres',
//     });
//   }
//   next();
// };
// module.exports = passwordValidation;