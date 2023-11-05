import { z } from "zod";

export const FormSeminarScheme = z.object({
    nama: z.string().nonempty("Nama tidak boleh kosong"),
    noHp: z.string().min(10, "Masukkan Nomor Hp Yang Valid!").max(15),
    jumlahTiket: z.number().min(1, "Jumlah Tiket Tidak Valid"),
    tanggal: z.string().nonempty("Tanggal tidak boleh kosong"),
  })