import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import farms from "../data/farms";
import { isEmail, focusFirstError } from "../lib/validate";
import { Button, Container, Notice, PageHeader, SelectInput, TextArea, TextInput } from "../components/ui/ui";

const reasons = ["Incorrect information", "Misleading claims", "Not a real or active business", "Duplicate listing", "Inappropriate content", "Other"];
const ORDER = ["listing", "reason", "details", "email"];

export default function ReportListing() {
  useSeo("Report a listing", "Tell Poultry about an incorrect or misleading farm listing.");
  const [sp] = useSearchParams();
  const [f, setF] = useState({ listing: farms.some((x) => x.slug === sp.get("farm")) ? sp.get("farm") : "", reason: "", details: "", email: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.listing) er.listing = "Choose the listing you are reporting.";
    if (!f.reason) er.reason = "Choose a reason.";
    if (f.details.trim().length < 20) er.details = "Describe the problem in at least 20 characters.";
    if (f.email.trim() && !isEmail(f.email)) er.email = "Enter an email address like name@example.com, or leave this blank.";
    setErrors(er);
    if (Object.keys(er).length) return focusFirstError(er, ORDER);
    setDone(true);
  };

  return (
    <>
      <PageHeader title="Report a listing" intro="If a listing is incorrect or misleading, tell us what is wrong." crumbs={[{ label: "Home", to: "/" }, { label: "Report a listing" }]} />
      <Container className="max-w-3xl py-10 sm:py-14">
        {done ? (
          <div>
            <Notice tone="info" title="Thank you for your report">We appreciate you helping keep the directory accurate.</Notice>
            <Button variant="outline" className="mt-5" onClick={() => setDone(false)}>Edit report</Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            {Object.keys(errors).length > 0 && <Notice tone="error" title="Please fix the highlighted fields">Each field with a problem explains what to change.</Notice>}
            <SelectInput id="listing" label="Listing" required value={f.listing} onChange={on("listing")} placeholder="Select a listing" options={farms.map((x) => ({ value: x.slug, label: x.name }))} error={errors.listing} />
            <SelectInput id="reason" label="Reason" required value={f.reason} onChange={on("reason")} placeholder="Select a reason" options={reasons} error={errors.reason} />
            <TextArea id="details" label="What is wrong?" required value={f.details} onChange={on("details")} error={errors.details} hint="Say which statement is incorrect and, if you can, what is correct." />
            <TextInput id="email" type="email" label="Your email" autoComplete="email" hint="Only if you want a reply." value={f.email} onChange={on("email")} error={errors.email} />
            <Button type="submit" size="lg">Check my report</Button>
          </form>
        )}
      </Container>
    </>
  );
}
