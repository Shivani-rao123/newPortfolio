import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create the transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER, // Sender email address (use a Gmail account)
    pass: process.env.NEXT_PUBLIC_SENDER_PASS, // Gmail App Password (Use App password if 2FA is enabled)
  },
});

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { firstName, lastName, email, message } = await request.json();

    // Log the form data for debugging
    console.log("Received form data:", { firstName, lastName, email, message });

    // Check if any required fields are missing
    if (!firstName || !lastName || !email || !message) {
      console.log("Form data validation failed: Missing fields");
      return NextResponse.json(
        { error: "All fields (First Name, Last Name, Email, Message) are required." },
        { status: 400 }
      );
    }

    // Setup mail options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_USER, // Sender's email
      to: process.env.NEXT_PUBLIC_RECEIVER_USER, // Receiver's email (your email)
      subject: `New Message from ${firstName} ${lastName}`,
      text: `
        You have received a new message:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email using Nodemailer
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    // Return success response
    return NextResponse.json(
      { message: "Thank you for contacting us! We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    // Log the error
    console.error("Error occurred while processing the form:", error);

    // Return a detailed error response
    return NextResponse.json(
      { error: `There was an error sending your message: ${error.message}` },
      { status: 500 }
    );
  }
}
