import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, MessageSquare, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required" }),
	lastName: z.string().min(1, { message: "Last name is required" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	phone: z.string().min(1, { message: "Phone number is required" }),
	message: z.string().min(1, { message: "Message is required" }),
	services: z.object({
		websiteDesign: z.boolean().default(false),
		uxDesign: z.boolean().default(false),
		userResearch: z.boolean().default(false),
		contentCreation: z.boolean().default(false),
		strategyConsulting: z.boolean().default(false),
		other: z.boolean().default(false),
	}),
});

export default function ContactForm() {
	const [countryCode, setCountryCode] = useState("US");

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
			services: {
				websiteDesign: false,
				uxDesign: false,
				userResearch: false,
				contentCreation: false,
				strategyConsulting: false,
				other: false,
			},
		},
	});

	function onSubmit(values) {
		console.log(values);
	}

	return (
		<div className="dark:bg-neutral-900 p-8 md:p-16 mx-auto border-b border-neutral-300 dark:border-neutral-700" id="contact">
			<div className="text-center mb-8">
				<h1 className="text-3xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
					CONTACT
					<span className="mx-4 text-orange-500 font-serif italic font-normal">
						Our
					</span>
					TEAM.
				</h1>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Got any questions about the product or scaling on our platform? We're
					here to help. Chat to our friendly team 24/7 and get onboard in less
					than 5 minutes.
				</p>
			</div>

			<div className="w-full flex justify-center">
				<div className="w-full md:w-3/4 max-w-3xl">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<FormLabel className="text-sm font-medium">
										First name
									</FormLabel>
									<FormField
										control={form.control}
										name="firstName"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="First name"
														{...field}
														className="h-11"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
								<div className="space-y-2">
									<FormLabel className="text-sm font-medium">
										Last name
									</FormLabel>
									<FormField
										control={form.control}
										name="lastName"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="Last name"
														{...field}
														className="h-11"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<FormLabel className="text-sm font-medium">Email</FormLabel>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder="you@company.com"
													{...field}
													className="h-11"
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>

							<div className="space-y-2">
								<FormLabel className="text-sm font-medium">
									Phone number
								</FormLabel>
								<div className="flex">
									<Select value={countryCode} onValueChange={setCountryCode}>
										<SelectTrigger className="w-[80px] h-11 border-r-0 rounded-r-none">
											<SelectValue placeholder="US" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="US">US</SelectItem>
											<SelectItem value="UK">UK</SelectItem>
											<SelectItem value="AU">AU</SelectItem>
											<SelectItem value="CA">CA</SelectItem>
										</SelectContent>
									</Select>
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem className="flex-1">
												<FormControl>
													<Input
														placeholder="+1 (555) 000-0000"
														{...field}
														className="h-11 rounded-l-none"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<FormLabel className="text-sm font-medium">Message</FormLabel>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea
													placeholder="Leave us a message..."
													className="min-h-[120px] resize-none"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>

							<div className="space-y-2">
								<FormLabel className="text-sm font-medium">
									What services are you interested in?
								</FormLabel>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									<FormField
										control={form.control}
										name="services.smartContracts"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal cursor-pointer">
													Smart Contracts Development
												</FormLabel>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="services.tokenization"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal cursor-pointer">
													Tokenization & Digital Assets
												</FormLabel>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="services.securityAudit"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal cursor-pointer">
													Security & Smart Contract Audits
												</FormLabel>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="services.defiSolutions"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal cursor-pointer">
													DeFi Solutions & Protocols
												</FormLabel>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="services.nftDevelopment"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal cursor-pointer">
													NFT Development & Marketplaces
												</FormLabel>
											</FormItem>
										)}
									/>
								</div>
							</div>

							<Button
								type="submit"
								className="w-full bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black h-12 cursor-pointer"
							>
								Send message
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
