'use server'

import { ExternalEmailTemplate } from '@/components/email-template-external'
import { InternalEmailTemplate } from '@/components/email-template-internal'
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
  console.log('sendEmail', formData)
  try {
    const { name, email, company, phone, message, budget } = formData

    const internalEmail = {
      from: 'Wenovate.io <noreply@wenovate.io>',
      to: ['hajdurobi19@gmail.com'],
      subject: 'Új megkeresés érkezett a weboldalon keresztül.',
      react: InternalEmailTemplate({
        name: name,
        message: message,
        company: company,
        phone: phone,
        budget: budgetRanges[budget as keyof typeof budgetRanges],
      }),
    }

    const externalEmail = {
      from: 'Dorka a Wenovate-től <info@wenovate.io>',
      to: [email],
      subject: 'Köszönjük a megkeresésed!',
      react: ExternalEmailTemplate({
        name: name,
      }),
    }

    const results = await Promise.all([
      resend.emails.send(externalEmail),
      new Promise((resolve) => setTimeout(resolve, 5000)),
      resend.emails.send(internalEmail),
    ])

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const { data, error } = await resend.contacts.create({
      email: email,
      firstName: name,
      audienceId: 'b449a00d-e1cd-424f-af32-2996ccd029fc',
    })

    console.log(data, error)

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send email' }
  }
}
