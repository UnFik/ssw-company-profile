import { NavbarGeneral } from "@/components/navbar";
import FormPdf from "./components/form";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { CardFormSkeleton } from "@/components/card";

function FormFallback() {
  return (
    <div className="lg:w-8/12 w-full mx-auto px-20">
      <CardFormSkeleton />
    </div>
  );
}

const JoinFormPage = () => {
  return (
    <div>
      <NavbarGeneral />
      <Suspense fallback={<FormFallback />}>
        <FormPdf />
      </Suspense>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default JoinFormPage;
