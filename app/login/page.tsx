"use client";

import { Logo } from "@/assets/vectors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type FormProps = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormProps) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen max-w-xl mx-auto">
      <Image alt="logo" src={Logo} height={80} width={80} />

      <h1 className="text-3xl font-medium">Connect to people who you love</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/5 space-y-6">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email or phone number" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="text-center">
            <Button type="submit" className="bg-blue-500">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
