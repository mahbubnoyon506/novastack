"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import CustomButton from "@/components/CustomButton";
import { FaArrowRightLong } from "react-icons/fa6";

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    console.log("Form Submitted:", values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* NAME FIELD */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-100">
                Name
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  placeholder="Your full name"
                  className="w-full h-10 mt-2 rounded-md border px-3 py-2 text-base text-gray-200 bg-transparent 
                             border-[#191919] placeholder:text-muted-foreground 
                             focus:outline transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EMAIL FIELD */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-100">
                Email
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full h-10 mt-2 rounded-md border px-3 py-2 text-base text-gray-200 bg-transparent 
                             border-[#191919] placeholder:text-muted-foreground 
                             focus:outline transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* MESSAGE FIELD */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-100">
                Message
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full min-h-20 mt-2 rounded-md border px-3 py-2 text-sm text-gray-200 bg-transparent 
                             border-[#191919] placeholder:text-muted-foreground 
                             focus:outline transition resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* SUBMIT BUTTON */}
        <CustomButton
          type="submit"
          className="bg-neutral-900 w-full"
          icon={<FaArrowRightLong />}
        >
          Send Message
        </CustomButton>
      </form>
    </Form>
  );
}
