import { NavbarBlog } from "@/components/ui/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
      <section>
        <NavbarBlog />
        {children}
      </section>
  );
}
