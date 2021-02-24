const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")

const bcrypt = require("bcrypt")


router.post("/registro", (req, res, next) => {

    console.log(req.body)

    const { email, password } = req.body
  
    if ( !password || !email ) {
      res.status(400).json({ message: "Rellene todos los campos solicitados." });
      return;
    }
  
    if (password.length < 8) {
      res
        .status(400)
        .json({
          message:
            "La contraseña debe tener más de 7 caracteres.",
        });
      return;
    }
  
    User.findOne({ email }, (err, foundUser) => {
      if (err) {
        res.status(500).json({ message: "Correo electrónico no encontrado." });
        return;
      }
  
      if (foundUser) {
        res.status(400).json({ message: "Correo electrónico en uso. Elija otro." });
        return;
      }
  
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
  
      const aNewUser = new User({
          
        email: email,
        password: hashPass

      });
  
      aNewUser.save((err) => {
        if (err) {
          res
            .status(400)
            .json({ message: "El usuario no se pudo guardar en la Base de Datos." });
          return;
        }
  
        // Automatically log in user after sign up
        // .login() here is actually predefined passport method
        req.login(aNewUser, (err) => {
          if (err) {
            res.status(500).json({ message: "No se pudo iniciar sesión." });
            return;
          }
  
          // Send the user's information to the frontend
          // We can use also: res.status(200).json(req.user);
          res.status(200).json(aNewUser);
        });
      });
    });
  });


router.post("/iniciar-sesion", (req, res, next) => {
    passport.authenticate("local", (err, theUser, failureDetails) => {
        console.log(theUser)
        if (err) {
        res
            .status(500)
            .json({ message: "Hubo un problema durante el proceso de autenticación del usuario." });
        return;
        }

        if (!theUser) {
        // "failureDetails" contains the error messages
        // from our logic in "LocalStrategy" { message: '...' }.
        res.status(401).json(failureDetails);
        return;
        }

        // save user in session
        req.login(theUser, (err) => {
        if (err) {
            res.status(500).json({ message: "No se pudo guardar la sesión." });
            return;
        }

        // We are now logged in (that's why we can also send req.user)
        res.status(200).json(theUser);
        });
    })(req, res, next);
});


router.post("/cerrar-sesion", (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: "Sesión cerrada con éxito." });
});

router.get("/loggedin", (req, res, next) => {
    if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
    }
    res.status(403).json({ message: "No autorizado." });
});

module.exports = router