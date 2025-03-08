import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, useInView } from "framer-motion";

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

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  services: z.object({
    smartContracts: z.boolean().default(false),
    tokenization: z.boolean().default(false),
    securityAudit: z.boolean().default(false),
    defiSolutions: z.boolean().default(false),
    nftDevelopment: z.boolean().default(false),
    other: z.boolean().default(false),
  }),
});

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ContactForm() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      services: {
        smartContracts: false,
        tokenization: false,
        securityAudit: false,
        defiSolutions: false,
        nftDevelopment: false,
        other: false,
      },
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <motion.div
      ref={formRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="dark:bg-neutral-900 p-8 md:p-16 mx-auto border-b border-neutral-300 dark:border-neutral-700"
      id="contact"
    >
      <motion.div variants={fadeIn} className="text-center mb-8">
        <h1 className="text-3xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
          CONTACT{" "}
          <span className="mx-4 text-orange-500 font-serif italic font-normal">
            Brickchain
          </span>{" "}
          TEAM.
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Have questions about blockchain integration, security, or token development? Get in touch with our experts and take your project to the next level.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="w-full flex justify-center"
      >
        <div className="w-full md:w-3/4 max-w-3xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={fadeIn} className="space-y-2">
                <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-11" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-2">
                <FormLabel className="text-sm font-medium">Email</FormLabel>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} className="h-11" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-2">
                <FormLabel className="text-sm font-medium">Message</FormLabel>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-2">
                <FormLabel className="text-sm font-medium">What services are you interested in?</FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["smartContracts", "Smart Contracts Development"],
                    ["tokenization", "Tokenization & Digital Assets"],
                    ["securityAudit", "Security & Smart Contract Audits"],
                    ["defiSolutions", "DeFi Solutions & Protocols"],
                    ["nftDevelopment", "NFT Development & Marketplaces"],
                    ["other", "Other"],
                  ].map(([name, label]) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={`services.${name}`}
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">{label}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black h-12 cursor-pointer"
                >
                  Send message
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </motion.div>
    </motion.div>
  );
}
