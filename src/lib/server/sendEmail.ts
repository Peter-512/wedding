import { SENDGRID_API_KEY } from '$env/static/private';
import { dev } from '$app/environment';
import sendgrid from '@sendgrid/mail';
import { error } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

type EmailOptions = {
	subject: string;
	html: string;
};

export const sendEmail = async ({ subject, html }: EmailOptions) => {
	const options = {
		from: 'peter.buschenreiter+wedding@gmail.com',
		to: 'peter.buschenreiter+wedding@gmail.com',
		subject: subject,
		html
	};

	if (dev) {
		nodemailer.createTestAccount((err, account) => {
			if (err) {
				console.error(`Failed to create a testing account. ${err.message}`);
				return error(400, err.message);
			}

			console.log('Credentials obtained, sending message...');

			const transporter = nodemailer.createTransport({
				host: 'smtp.ethereal.email',
				port: 587,
				secure: false,
				auth: {
					user: account.user,
					pass: account.pass
				}
			});

			return transporter.sendMail(options, (err, info) => {
				if (err) {
					console.error(`Error occurred. ${err.message}`);
					return error(400, err.message);
				}

				console.log(`Message sent: ${info.messageId}`);
				console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
			});
		});
		return { message: 'Email sent' };
	} else {
		sendgrid.setApiKey(SENDGRID_API_KEY);

		sendgrid
			.send(options)
			.then(() => {
				console.log('Email sent');
			})
			.catch((err) => {
				console.error(err);
				return error(400, err.message);
			});
		return { message: 'Email sent' };
	}
};
