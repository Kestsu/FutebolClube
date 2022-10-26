// const emailValidation = (req, res, next) => {
//     const talkerPost = req.body;
//     const emails = ['email'];
//     const email = emails.every((property) => property in talkerPost);
//     function validateEmail(a) { const re = /\S+@\S+\.\S+/; return re.test(a); }
//     if (!email) {
//       return res.status(400).json({
//         message: 'O campo "email" é obrigatório',
//       });
//     }
//     const validar = validateEmail(talkerPost.email);
//     if (validar === false) {
//       return res.status(400).json({
//         message: 'O "email" deve ter o formato "email@email.com"',
//       });
//     }
//     next();
//   };
  
//   module.exports = emailValidation;