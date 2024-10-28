import * as z from "zod";

const FormSchema = z.object({
  nama: z.string().nonempty("Nama tidak boleh kosong"),
  noIdentitas: z
    .string()
    .min(12, "No Identitas Tidak Valid")
    .max(20, "No Identitas Tidak Valid"),
  kelamin: z.enum(["Laki-laki", "Perempuan"], {
    required_error: "Pilih Jenis Kelamin.",
  }),
  agama: z.string().max(255).optional(),
  noHp: z.string().min(10, "Masukkan Nomor Hp Yang Valid!").max(15),
  email: z.string().email("Format Email tidak valid"),
  alamat: z.string().nonempty("Alamat tidak boleh kosong").max(100),
  kota: z.string().min(3, "Masukkan Kota yang valid").max(50),
  kodePos: z
    .string()
    .min(5, "Masukkan Kode Pos Yang Valid")
    .max(5, "Masukkan Kode Pos Yang Valid"),
  tempatLahir: z.string(),
  tanggalLahir: z.string(),

  namaAhliWaris: z.string().max(50),
  hubunganAhliWaris: z.string().max(50),
  noHpAhliWaris: z.string(),

  bank: z.string(),
  noRekening: z.string(),
  paket: z.string(),
  pembayaran: z.string(),
  namaSponsor: z.string().optional(),
});

export const FormSeminarScheme = z.object({
  nama: z.string().nonempty("Nama tidak boleh kosong"),
  noHp: z.string().min(10, "Masukkan Nomor Hp Yang Valid!").max(15),
  jumlahTiket: z.number().min(1, "Jumlah Tiket Tidak Valid"),
  tanggal: z.string().nonempty("Tanggal tidak boleh kosong"),
});

export default FormSchema;
