const express=require("express");
const router=new express.Router();
const nodemailer=require("nodemailer");
require("dotenv").config();


router.post("/send-email",(req,res)=>{
    const{name,email,subject,message}=req.body;
    try{
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        });

        const mailOptions={
            from: email, 
            to: process.env.USER,
            subject: `Message from ${name}: ${subject}`,
            text: `${message}\n\nSender Email: ${email}`,
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if (error) {
                console.log("Error", error);
                res.status(500).json({ message: "Email sending failed" });
              } else {
                console.log("Email sent", info.response);
                res.status(200).json({ message: "Email sent successfully" });
              }
        })
    }catch(err)
    {
        res.status(201).json({status:401,err});
    }
});

module.exports=router;