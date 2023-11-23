"use client"

import { type FC } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { trySubmit } from "@/lib/try-catch"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { RegisterSchema, registerSchema } from "./schema/register-schema"

type Props = {}

const AuthForm: FC<Props> = () => {
  const router = useRouter()
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })
  const onSubmit = trySubmit(
    async (values) => {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (response.ok) {
        router.push("/login")
      }
    },
    { success: "Success Registered" }
  )
  const jenisBisnis = [
    "Makanan",
    "Fashion",
    "Hasil Peternakan",
    "Hasil Pertanian/Perkebunan",
    "Kerajinan",
    "Interior/Kontruksi",
    "Lainnya",
  ]
  return (
    <div className="mx-auto w-full rounded-lg border-2 shadow sm:max-w-md md:mt-0 xl:p-0">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl">
          register
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noWhatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex justify-between">
                      <span>Password</span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domisili"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domisili</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="namaPerusahaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Perusahaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jenisBisnis"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Jenis/Kategori Bisnis yang anda punya</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {jenisBisnis.map((item) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={item}>
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              Submit
            </Button>

            <p className="text-sm font-light text-muted-foreground">
              Don’t have an account yet?{" "}
              <a href="#" className="font-medium hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AuthForm
