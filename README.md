# Md. Abdul Latif Siyam - Portfolio

A lightweight Next.js portfolio for Md. Abdul Latif Siyam, with a server-side contact API and no database.

## Live Portfolio

https://md-abdul-latif-siyam-portfolio.vercel.app/

## Run locally

Install Node.js 18.17+ and npm, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

Portfolio content is static, while the contact form uses a serverless API route. It can be deployed to Vercel with the email environment variables configured.

## Contact form backend

The contact form submits to `POST /api/contact`. The API validates each submission and delivers it through [Resend](https://resend.com); messages are emailed directly and are not stored in a database.

Configure these environment variables in `.env.local` for local development and in your hosting provider for production:

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <contact@your-verified-domain.com>
```

Verify the sender domain with Resend before using it. If these variables are missing or email delivery fails, the form displays an error and the API returns a non-success status. The recipient inbox can also be reached directly at mdabdullatifsiyam733@gmail.com.
