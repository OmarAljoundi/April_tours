import { NextRequest, NextResponse } from "next/server";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: NextRequest) {
  const mailerSend = new MailerSend({
    apiKey: process.env.NEXT_PUBLIC_API_MILL!,
  });

  const body = await req.json();

  const personalization = [
    {
      email: process.env.NEXT_PUBLIC_API_SENT_TO!,
      data: {
        ...body,
      },
    },
  ];

  const sentFrom = new Sender("no-reply@mundo-tours.com", "no-reply");
  const recipients = [
    new Recipient(process.env.NEXT_PUBLIC_API_SENT_TO!, "May Al-bakri"),
  ];
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setTemplateId("3vz9dle1o164kj50")
    .setPersonalization(personalization);

  await mailerSend.email.send(emailParams);
  return NextResponse.json({ message: "SENT" });
}
