import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import messageSend from "../assets/messageSend.png";

const schema = yup
	.object({
		firstName: yup.string().trim().min(3, "Your first name should be at least 3 characters.").required("Please enter your first name"),
		lastName: yup.string().trim().min(3, "Your last name should be at least 3 characters.").required("Please enter your last name"),
		emailAddress: yup.string().email("Invalid email format").required("Please enter your email"),
		subject: yup.string().trim().min(3, "Your subject should be at least 3 characters.").required("Please enter your subject"),
		message: yup.string().trim().min(3, "Your message should be at least 3 characters.").required("Please enter your message"),
	})
	.required();

export default function Contact() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
		reset();
		setIsSubmitted(true);
	}

	return (
		<div className="pt-10 mx-auto max-w-7xl">
			{isSubmitted ? (
				<div className="mx-5 lg:mx-20">
					<img src={messageSend} alt="Message send image" />
					<Link to="/">
						<button
							onClick={() => setIsSubmitted(false)}
							className="shadow-md mt-10 p-2 px-6 flex w-4/5 md:w-auto items-center justify-center rounded-md bg-green-700 py-3 mx-auto text-base font-medium text-white hover:font-bold"
						>
							Back to shopping
						</button>
					</Link>
				</div>
			) : (
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="m-2 px-4 sm:px-0">
							<h3 className="text-xl font-bold leading-6 text-slate-900">Contact us:</h3>
							<p className="mt-1 text-sm text-gray-600">Send your message and we'll get back to you within 24 hours.</p>
						</div>
					</div>
					<div className="bg-white mt-5 md:col-span-2 md:mt-0">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-900">
												<span className="text-red-new">* </span>
												First name
											</label>
											<input
												{...register("firstName")}
												type="text"
												name="firstName"
												id="firstName"
												autoComplete="given-name"
												className="mt-2 block w-full rounded-md border-0 p-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-gray-400 sm:text-sm sm:leading-6"
											/>
											<p className="text-sm text-red-new">{errors.firstName?.message}</p>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-900">
												<span className="text-red-new">* </span>
												Last name
											</label>
											<input
												{...register("lastName")}
												type="text"
												name="lastName"
												id="lastName"
												autoComplete="family-name"
												className="mt-2 block w-full rounded-md border-0 p-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-gray-400 sm:text-sm sm:leading-6"
											/>
											<p className="text-sm text-red-new">{errors.lastName?.message}</p>
										</div>

										<div className="col-span-6 sm:col-span-4">
											<label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-slate-900">
												<span className="text-red-new">* </span>
												Email address
											</label>
											<input
												{...register("emailAddress")}
												type="text"
												name="emailAddress"
												id="emailAddress"
												autoComplete="email"
												className="mt-2 block w-full rounded-md border-0 p-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-gray-400 sm:text-sm sm:leading-6"
											/>
											<p className="text-sm text-red-new">{errors.emailAddress?.message}</p>
										</div>

										<div className="col-span-6">
											<label htmlFor="subject" className="block text-sm font-medium leading-6 text-slate-900">
												<span className="text-red-new">* </span>
												Subject
											</label>
											<input
												{...register("subject")}
												type="text"
												name="subject"
												id="subject"
												className="mt-2 block w-full rounded-md border-0 p-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-gray-400 sm:text-sm sm:leading-6"
											/>
											<p className="text-sm text-red-new">{errors.subject?.message}</p>
										</div>

										<div className="col-span-6">
											<label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">
												<span className="text-red-new">* </span>
												Message
											</label>
											<div className="mt-2">
												<textarea
													{...register("message")}
													id="message"
													name="message"
													rows={3}
													className="mt-2 block w-full rounded-md border-0 p-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-gray-400 sm:text-sm sm:leading-6"
												/>
												<p className="text-sm text-red-new">{errors.message?.message}</p>
											</div>
										</div>
									</div>
								</div>
								<button
									type="submit"
									className="shadow-md my-10 p-2 px-6 flex w-4/5 md:w-auto items-center justify-center rounded-md bg-green-700 py-3 mx-auto text-base font-medium text-white hover:font-bold"
								>
									Send message
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
