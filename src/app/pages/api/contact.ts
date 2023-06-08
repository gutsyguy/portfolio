import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ContactApi(res:any,req:any) {
    const {name, email, message} = req.body

    const user = process.env.user

    const data = {
        name, email, message
    }
    
    const transporter = nodemailer.createTransporter({
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass
        }
    })

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: 'yalambersubba13@gmail.com',
            replyTo: email,
            subject: `form submission from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        }) 
        console.log('message was sent:', mail.messageId)

        return res.status(200).json({message: 'success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "could not send email, Your message was not sent"})
    }

    return res.status(200).json({message: 'sucess'})
}

