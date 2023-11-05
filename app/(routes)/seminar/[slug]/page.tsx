"use client";

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/Card";
import Image from "next/image";
import React from "react";
import SeminarData from "@/data/seminar.json";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSeminarScheme } from "@/lib/scheme";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { NavbarGeneral } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
type FormValues = z.infer<typeof FormSeminarScheme>;

const BookFormSeminar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname
    .split("/")
    .filter((segment) => segment)[1]
    .replace(/%20/g, " ");
  const seminar = SeminarData.find((p) => p.name === slug);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSeminarScheme),
    defaultValues: {
      nama: "",
      jumlahTiket: 1,
      noHp: "",
      tanggal: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSeminarScheme>) {
    var tanggal = values.tanggal;
    
    var parts = tanggal.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];

    var months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    var tanggalFormat =
      days[new Date(tanggal).getDay()] +
      ", " +
      day +
      " " +
      months[Number(month)-1] + " " +
      " " +
      year;

    router.push(
      `https://wa.me/6282114038541?text=Halo%2C%20Saya%20Ingin%20Mendaftar%20Seminar%20di%20${seminar?.name}%20pada%20${tanggalFormat}%20di%20${seminar?.region}.%0A%0ANama%3A%20${values.nama}%0ANo.%20HP%3A%20${values.noHp}%0AJumlah%20Tiket%3A%20${values.jumlahTiket}%0A%0ATerima%20Kasih`
    );
  }

  if (!seminar) {
    return <div>Seminar not found</div>;
  }

  return (
    <div>
      <NavbarGeneral />
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
                BOOKING FORM SEMINAR {seminar.name.toUpperCase()}
              </h1>
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
                className="space-y-5"
              >
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
                  name="noHp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No Hp</FormLabel>
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
                  name="jumlahTiket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Tiket</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Tiket"
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
                  name="tanggal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Seminar</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Masukkan Booking Seminar..."
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
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="my-10"></div>
      <Footer />
    </div>
  );
};

export default BookFormSeminar;
