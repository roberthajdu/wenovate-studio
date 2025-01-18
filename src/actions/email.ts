'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  budget: string
}

const budgetRanges = {
  '0': '100E – 1M Ft',
  '1': '1M – 2M Ft',
  '2': '2M – 3,5M Ft',
  '3': 'Több mint 3,5M Ft',
}

export async function sendEmail(formData: ContactFormData) {
  try {
    const { name, email, company, phone, message, budget } = formData

    await resend.emails.send({
      from: 'contact@wenovate.hu',
      to: 'hello@wenovate.hu',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget Range:</strong> ${budgetRanges[budget as keyof typeof budgetRanges]}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send email' }
  }
}
