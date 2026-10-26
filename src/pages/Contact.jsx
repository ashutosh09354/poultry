import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle, Phone, Send, Sprout } from "lucide-react";
import useSeo from "../hooks/useSeo";
import site from "../data/site";
import farms from "../data/farms";
import products from "../data/products";
import { isEmail, isIndianMobile, focusFirstError } from "../lib/validate";
import { Button, Container, Notice, PageHeader, SelectInput, TextArea, TextInput } from "../components/ui/ui";

const topics = [
  { value: "general", label: "General question" },
  { value: "farm-enquiry", label: "Enquiry about a farm" },
  { value: "product-enquiry", label: "Enquiry about a product" },
  { value: "list-farm", label: "Listing my farm" },
  { value: "business-enquiry", label: "Business or partnership enquiry" },
  { value: "feedback", label: "Feedback about the site" },
];
const ORDER = ["name", "email", "phone", "topic", "message"];

export default function Contact() {
  useSeo("Contact us", "Send an enquiry to Poultry.");
  const [sp] = useSearchParams();
  const farm = farms.find((f) => f.slug === sp.get("farm"));
  const product = products.find((p) => p.id === sp.get("product"));
  const initialTopic = topics.some((t) => t.value === sp.get("topic")) ? sp.get("topic") : "general";

  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: initialTopic, message: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const on = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Enter your name.";
    if (!form.email.trim()) er.email = "Enter your email address.";
    else if (!isEmail(form.email)) er.email = "Enter an email address like name@example.com.";
    if (form.phone.trim() && !isIndianMobile(form.phone)) er.phone = "Enter a 10-digit Indian mobile number, or leave this blank.";
    if (!form.topic) er.topic = "Choose what your message is about.";
    if (form.message.trim().length < 10) er.message = "Write at least 10 characters so we know how to help.";
    setErrors(er);
    if (Object.keys(er).length) return focusFirstError(er, ORDER);
    setDone(true);
  };

  return (
    <>
      <PageHeader title="Let's start a conversation" intro="Ask a question, make an enquiry about a farm or product, or share an idea to make Poultry better." crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}>
        <div className="mt-7 flex flex-wrap gap-3 text-sm text-mist-100">
          <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5"><MessageCircle size={16} />Enquiries welcome</span>
          <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5"><Sprout size={16} />For India's poultry community</span>
        </div>
      </PageHeader>
      <main className="relative overflow-hidden bg-mist-50">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border-[28px] border-mist-200/60" />
        <Container className="relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.55fr_0.9fr] lg:gap-12">
        <section className="rounded-2xl border border-mist-200 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(16,42,71,0.35)] sm:p-9" aria-labelledby="message-heading">
          <div className="mb-7 flex items-start gap-4 border-b border-line pb-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]"><Send size={20} aria-hidden="true" /></span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Send an enquiry</p>
              <h2 id="message-heading" className="mt-1 text-2xl font-bold">How can we help?</h2>
              <p className="mt-1 text-sm text-ink-soft">Tell us a little about what you need and we will direct your message to the right team.</p>
            </div>
          </div>
          {done ? (
            <div>
              <Notice tone="success" title="Thank you for your message">Your enquiry has been received. We will get back to you as soon as possible.</Notice>
              <Button className="mt-5" variant="outline" onClick={() => { setDone(false); setForm({ ...form, message: "" }); }}>Edit message</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              {(farm || product) && <Notice tone="info">Enquiry about: <strong>{farm ? farm.name : product.name}</strong></Notice>}
              {Object.keys(errors).length > 0 && <Notice tone="error" title="Please fix the highlighted fields">Each field with a problem explains what to change.</Notice>}
              <div className="grid gap-5 sm:grid-cols-2">
                <TextInput id="name" label="Your name" required autoComplete="name" value={form.name} onChange={on("name")} error={errors.name} />
                <TextInput id="email" type="email" label="Email" required autoComplete="email" value={form.email} onChange={on("email")} error={errors.email} />
                <TextInput id="phone" type="tel" label="Mobile number" autoComplete="tel" hint="10-digit Indian mobile number" value={form.phone} onChange={on("phone")} error={errors.phone} />
                <SelectInput id="topic" label="Enquiry category" required value={form.topic} onChange={on("topic")} options={topics} error={errors.topic} />
              </div>
              <TextArea id="message" label="Message" required value={form.message} onChange={on("message")} error={errors.message} />
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button type="submit" size="lg">Send message <ArrowUpRight size={18} aria-hidden="true" /></Button>
                <span className="text-sm text-ink-soft">Fields marked <span className="font-semibold text-danger">*</span> are required.</span>
              </div>
            </form>
          )}
        </section>

        <aside className="h-fit overflow-hidden rounded-2xl border border-brand-800 bg-brand-900 text-white shadow-[0_20px_50px_-28px_rgba(16,42,71,0.65)]">
          <div className="border-b border-white/15 p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mist-200">Contact details</p>
            <h2 className="mt-2 text-3xl font-bold !text-white">Prefer a direct route?</h2>
            <p className="mt-3 text-sm leading-6 text-mist-200">Choose the channel that works best for you. We welcome questions from farmers, buyers and partners.</p>
          </div>
          <ul className="divide-y divide-white/15">
            <li><a href={`mailto:${site.email}`} className="group flex items-center gap-4 p-6 transition-colors hover:bg-white/10 sm:p-7"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f4b942]"><Mail size={19} aria-hidden="true" /></span><span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-[0.12em] text-mist-200">Email us</span><span className="mt-1 block break-all font-semibold underline decoration-white/30 underline-offset-4 group-hover:decoration-[#f4b942]">{site.email}</span></span><ArrowUpRight className="ml-auto shrink-0 text-mist-200" size={18} aria-hidden="true" /></a></li>
            {site.phone && <li><a href={site.phoneHref} className="group flex items-center gap-4 p-6 transition-colors hover:bg-white/10 sm:p-7"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f4b942]"><Phone size={19} aria-hidden="true" /></span><span><span className="block text-xs font-semibold uppercase tracking-[0.12em] text-mist-200">Call us</span><span className="mt-1 block font-semibold underline decoration-white/30 underline-offset-4 group-hover:decoration-[#f4b942]">{site.phone}</span></span><ArrowUpRight className="ml-auto shrink-0 text-mist-200" size={18} aria-hidden="true" /></a></li>}
          </ul>
          <div className="m-5 flex gap-3 border border-white/15 bg-white/5 p-4 text-sm text-mist-100 sm:m-6"><CheckCircle2 size={19} className="shrink-0 text-[#f4b942]" aria-hidden="true" /><p>{site.contactConfirmed ? "Our contact details are confirmed and ready for your enquiry." : "Contact details are being verified. Please use the form for the most reliable way to reach us."}</p></div>
        </aside>
        </Container>
      </main>
    </>
  );
}
