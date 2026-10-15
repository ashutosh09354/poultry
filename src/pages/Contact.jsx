import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
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
      <PageHeader title="Contact us" intro="Ask a question, make an enquiry about a farm or product, or tell us what could be better." crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {done ? (
            <div>
              <Notice tone="info" title="Thank you for your message">We will get back to you as soon as possible.</Notice>
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
              <Button type="submit" size="lg">Send message</Button>
            </form>
          )}
        </div>

        <aside className="h-fit rounded-[6px] border border-line bg-white p-6">
          <h2 className="text-xl font-bold">Contact details</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={18} aria-hidden="true" className="text-forest-700" /><a href={`mailto:${site.email}`} className="underline">{site.email}</a></li>
            <li className="flex items-center gap-2"><Phone size={18} aria-hidden="true" className="text-forest-700" /><a href={site.phoneHref} className="underline">{site.phone}</a></li>
          </ul>
          <p className="mt-4 text-sm text-ink-soft">We do not state a response time.</p>
        </aside>
      </Container>
    </>
  );
}
