const { comparePassword } = require("../helpers/bcrypt");
const { signIn } = require("../helpers/jwt");
const { User } = require("../models");
const nodemailer = require("nodemailer");

class Controller {
    static async register(req, res, next) {
        const { username, email, password } = req.body;
        try {
            const newUser = await User.create({ username, email, password });

            // let transporter = nodemailer.createTransport({
            //     service: "hotmail",
            //     auth: {
            //         user: "StockViewProject.outlook.com",
            //         pass: "Madejwk99"
            //     }
            // });
            // if (selectedItinerary) {
            //     let info = await transporter.sendMail({
            //         from: 'dimaskurniawan0000@outlook.co.id', // sender address
            //         to: customerEmail, // list of receivers
            //         subject: "Registration Information", // Subject line
            //         text: "Wellcome to Stock View", // plain text body
            //     });
            //     console.log(info, "success send email");
            // }

            res.status(201).json({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error("USER_NOT_FOUND");
            }

            const validPassword = comparePassword(password, user.password);
            if (!validPassword) {
                throw new Error("USER_NOT_FOUND");
            }

            const access_token = signIn({ id: user.id });

            res.status(200).json({
                access_token,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
