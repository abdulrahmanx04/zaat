import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { templates } from './templates'
dotenv.config()
const transporter= nodemailer.createTransport({
    host :'smtp.gmail.com',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})


export type  emailType= 'verification'  | 'reset'

export async function sendEmail(type: emailType,to: string,url: string ) {
    const template= templates[type](url)
    await transporter.sendMail({
        from: 'ZAAT-platform',
        to,
        subject: template.subject,
        html :template.html
    })
}