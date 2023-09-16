"use client";

import { Button } from "@/components/ui/Button";
import { jsPDF } from "jspdf";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormSchema from "./scheme";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Logo from "@/components/ui/Logo";
type FormValues = z.infer<typeof FormSchema>;
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormPdf = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nama: "",
      noIdentitas: "",
      kelamin: "Laki-laki",
      agama: "",
      noHp: "",
      email: "",
      alamat: "",
      kota: "",
      kodePos: "",
      tempatLahir: "",
      tanggalLahir: "",
      namaAhliWaris: "",
      hubunganAhliWaris: "",
      noHpAhliWaris: "",
      bank: "",
      noRekening: "",
      paket: "1",
      pembayaran: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    generatePDF(data);
  }

  //   const generatePdf = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const generatePDF = (data: z.infer<typeof FormSchema>) => {
    function getPembayaran(paket: string) {
      if (paket == "1") {
        return "2.500.000";
      } else if (paket == "3") {
        return "7.500.000";
      } else if (paket == "7") {
        return "17.500.000";
      } else if (paket == "15") {
        return "37.500.000";
      } else if (paket == "31") {
        return "77.500.000";
      }
    }

    const doc = new jsPDF();

    const img1 = "/logo/logo-ptbest.png";
    doc.addImage(img1, "PNG", 20, 10, 20, 30);
    doc.setFontSize(18);
    doc.setFont("courier", "bold");
    doc.text("APPLICATION FORM", 74, 23);
    doc.setFontSize(10);
    doc.text("FORMULIR PERMOHONAN MENJADI MITRA PT BEST", 60, 30);
    const img2 = "/logo/logo-ssw.png";
    doc.addImage(img2, "PNG", 165, 10, 30, 30);

    doc.setFontSize(16);
    doc.setFont("courier", "bold");
    doc.text("Data Mitra", 20, 50);
    doc.setLineHeightFactor(1.5);
    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.setLineWidth(0.5);
    doc.text(`Nama Lengkap          : ${data.nama}`, 20, 60);
    doc.text(`No Identitas          : ${data.noIdentitas}`, 20, 67);
    doc.text(`Jenis Kelamin         : ${data.kelamin}`, 20, 74);
    doc.text(`Agama                 : ${data.agama}`, 20, 81);
    doc.text(`No. Hp Keanggotaan    : ${data.noHp}`, 20, 88);
    doc.text(`Email                 : ${data.email}`, 20, 96);
    doc.text(`Alamat Lengkap        : `, 20, 103);
    doc.text(`${data.alamat}`, 81, 103, { maxWidth: 100 });
    doc.text(`Kota                  : ${data.kota}`, 20, 117);
    doc.text(`Kode Pos              : ${data.kodePos}`, 20, 124);
    doc.text(`Tempat Lahir          : ${data.kota}`, 20, 131);
    doc.text(`Tanggal Lahir         : ${data.tanggalLahir}`, 20, 138);

    doc.setFontSize(16);
    doc.setFont("courier", "bold");
    doc.text("Data Ahli Waris", 20, 150);
    doc.setLineHeightFactor(1.5);
    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.text(`Nama Ahli Waris       : ${data.namaAhliWaris}`, 20, 157);
    doc.text(`Hubungan Ahli Waris   : ${data.hubunganAhliWaris}`, 20, 164);
    doc.text(`No Telp. Ahli Waris   : ${data.noHpAhliWaris}`, 20, 171);

    doc.setFontSize(16);
    doc.setFont("courier", "bold");
    doc.text("Data Rekening", 20, 183);
    doc.setLineHeightFactor(1.5);
    doc.setFontSize(12);
    doc.setFont("courier", "normal");
    doc.text(`Bank                  : ${data.bank}`, 20, 190);
    doc.text(`No Rekening           : ${data.noRekening}`, 20, 197);
    doc.text(`Pilihan Paket         : ${data.paket}`, 20, 204);
    doc.text(`Total Pembayaran      : ${getPembayaran(data.paket)}`, 20, 211);

    doc.setFontSize(10);
    doc.text(`.........,..../....../......`, 130, 230);
    doc.setFontSize(16);
    doc.setFont("courier", "bold");
    doc.text(`Nama Pemohon`, 130, 240);
    doc.setFontSize(10);
    doc.setFont("courier", "normal");
    doc.text(`(...............................)`, 120, 270);

    doc.save(`form_data_${data.nama}.pdf`);
  };

  return (
    <div>
      <div className="md:px-32 px-2 mt-10">
        <Card className="lg:w-8/12 w-full mx-auto">
          <CardHeader className="flex flex-row justify-evenly w-full">
            <Image
              src="/logo/logo-ptbest.svg"
              width={80}
              height={20}
              alt="Logo PT. BEST"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 100vw"
            />
            <div className="text-center md:space-y-3 my-auto pt-6">
              <h1 className="md:text-2xl text-lg font-bold">
                APPLICATION FORM
              </h1>
              <CardDescription className="md:text-lg text-base">
                Formulir Permohonan Menjadi Mitra PT. BEST
              </CardDescription>
            </div>
            <Image
              src="/logo/logo-ssw.svg"
              sizes="(max-width: 768px) 200vw, 700px"
              width={130}
              height={130}
              alt="Logo Smart Sinergy World"
            />
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <h2 className="text-3xl font-semibold mt-7">Data Mitra</h2>
                <FormField
                  control={form.control}
                  name="nama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nama Lengkap..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noIdentitas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No Identitas</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan No Identitas..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Identitas bisa dengan KTP, SIM, atau Paspor
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="kelamin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Laki-laki" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Laki -laki
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Perempuan" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Perempuan
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agama</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Agama..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noHp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No Hp Keanggotaan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan No. Hp Yang Aktif"
                          {...field}
                          value={field.value !== null ? field.value : ""}
                        />
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
                        <Input placeholder="Masukkan Email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="alamat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Lengkap</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Alamat Lengkap..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="kota"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kota</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Kota..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="kodePos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kode Pos</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Kode Pos..."
                          {...field}
                          value={field.value !== null ? field.value : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tempatLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Tempat Lahir..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tanggalLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Masukkan Tanggal Lahir..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Format: Hari/Bulan/Tahun
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h2 className="text-3xl font-semibold pt-10">
                  Data Ahli Waris
                </h2>
                <FormField
                  control={form.control}
                  name="namaAhliWaris"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel>Nama Ahli Waris</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nama Ahli Waris..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hubunganAhliWaris"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel>Hubungan Ahli Waris</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Hubungan Ahli Waris..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noHpAhliWaris"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel>No Hp Ahli Waris</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan No Hp Ahli Waris..."
                          {...field}
                          value={field.value !== null ? field.value : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h2 className="text-3xl font-semibold pt-10">Data Rekening</h2>
                <FormField
                  control={form.control}
                  name="bank"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel>Bank</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Bank..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noRekening"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel>No Rekening</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan No Rekening..."
                          {...field}
                          value={field.value !== null ? field.value : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Paket</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Paket Kemitraan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 (BASIC)</SelectItem>
                          <SelectItem value="3">3 (REGULER)</SelectItem>
                          <SelectItem value="7">7 (BUSINESS)</SelectItem>
                          <SelectItem value="15">15 (EXECUTIVES)</SelectItem>
                          <SelectItem value="31">31 (PRIORITY)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
            {/* <Button onClick={generatePDF}>generate</Button> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormPdf;
