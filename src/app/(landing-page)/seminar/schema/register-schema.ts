import { z } from "zod"

export const registerSchema = z.object({
  nama: z.string(),
  email: z.string(),
  noWhatsapp: z.string(),
  domisili: z.string(),
  namaPerusahaan: z.string(),
  jenisBisnis: z.string(),
  produk: z.string(),
  sudahEksport: z.string(),
  alasanIkut: z.string(),
  sumberInformasi: z.string(),
})
export type RegisterSchema = z.infer<typeof registerSchema>
