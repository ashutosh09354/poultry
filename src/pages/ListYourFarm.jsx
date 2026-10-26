import { useState } from "react";
import useSeo from "../hooks/useSeo";
import categories from "../data/categories";
import products from "../data/products";
import statesData from "../data/states";
import { farmTypes } from "../data/farms";
import { isEmail, isIndianMobile, focusFirstError } from "../lib/validate";
import { Button, Container, Field, Notice, PageHeader, SelectInput, TextArea, TextInput } from "../components/ui/ui";

const ORDER = ["farmName", "state", "city", "category", "farmType", "products", "contactName", "phone", "email", "images"];
const empty = { farmName: "", state: "", city: "", category: "", farmType: "", products: [], description: "", contactName: "", phone: "", email: "" };
const MAX = 5 * 1024 * 1024;

export default function ListYourFarm() {
  useSeo("List your farm", "Create a poultry farm listing for Poultry.");
  const [f, setF] = useState(empty);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const toggleProduct = (id) => setF({ ...f, products: f.products.includes(id) ? f.products.filter((p) => p !== id) : [...f.products, id] });

  const onFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    const bad = picked.find((x) => !x.type.startsWith("image/") || x.size > MAX);
    if (picked.length > 5) setErrors({ ...errors, images: "Choose up to 5 images." });
    else if (bad) setErrors({ ...errors, images: `"${bad.name}" is not an image under 5 MB.` });
    else { setErrors({ ...errors, images: undefined }); setFiles(picked); }
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.farmName.trim()) er.farmName = "Enter the farm's name.";
    if (!f.state) er.state = "Choose a state.";
    if (!f.city.trim()) er.city = "Enter the town or city.";
    if (!f.category) er.category = "Choose the category that best describes the farm.";
    if (!f.farmType) er.farmType = "Choose a farm type.";
    if (!f.products.length) er.products = "Select at least one product.";
    if (!f.contactName.trim()) er.contactName = "Enter a contact person.";
    if (!f.phone.trim()) er.phone = "Enter a mobile number.";
    else if (!isIndianMobile(f.phone)) er.phone = "Enter a 10-digit Indian mobile number.";
    if (!f.email.trim()) er.email = "Enter an email address.";
    else if (!isEmail(f.email)) er.email = "Enter an email address like name@example.com.";
    if (errors.images) er.images = errors.images;
    setErrors(er);
    if (Object.keys(er).length) return focusFirstError(er, ORDER);
    setDone(true);
  };

  const cities = statesData.find((s) => s.state === f.state)?.cities || [];

  return (
    <>
      <PageHeader title="List your farm" intro="Prepare a profile so buyers and other poultry businesses can find you." crumbs={[{ label: "Home", to: "/" }, { label: "List Your Farm" }]} />
      <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.7fr_1fr]">
        <div>
          {done ? (
            <div className="space-y-5">
              <Notice tone="info" title="Your listing details are ready">Review the information below before continuing.</Notice>
              <dl className="divide-y divide-line rounded-[6px] border border-line bg-white text-sm">
                {[
                  ["Farm", f.farmName], ["Location", `${f.city}, ${f.state}`],
                  ["Category", categories.find((c) => c.id === f.category)?.name], ["Farm type", f.farmType],
                  ["Products", f.products.map((p) => products.find((x) => x.id === p).name).join(", ")],
                  ["Contact", `${f.contactName}, ${f.phone}, ${f.email}`], ["Description", f.description || "None"],
                  ["Images", files.length ? files.map((x) => x.name).join(", ") : "None"],
                ].map(([k, v]) => <div key={k} className="grid gap-1 p-4 sm:grid-cols-[9rem_1fr]"><dt className="font-semibold text-brand-900">{k}</dt><dd className="text-ink-soft">{v}</dd></div>)}
              </dl>
              <Button variant="outline" onClick={() => setDone(false)}>Edit details</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              {Object.keys(errors).filter((k) => errors[k]).length > 0 && <Notice tone="error" title="Please fix the highlighted fields">Each field with a problem explains what to change.</Notice>}

              <fieldset className="space-y-5 rounded-[6px] border border-line bg-white p-5">
                <legend className="px-2 text-lg font-bold text-brand-900">Farm details</legend>
                <TextInput id="farmName" label="Farm name" required value={f.farmName} onChange={on("farmName")} error={errors.farmName} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectInput id="state" label="State" required value={f.state} onChange={(e) => setF({ ...f, state: e.target.value, city: "" })} placeholder="Select a state" options={statesData.map((s) => s.state)} error={errors.state} />
                  <TextInput id="city" label="Town or city" required list="city-list" value={f.city} onChange={on("city")} error={errors.city} />
                  <datalist id="city-list">{cities.map((c) => <option key={c} value={c} />)}</datalist>
                  <SelectInput id="category" label="Farm category" required value={f.category} onChange={on("category")} placeholder="Select a category" options={categories.map((c) => ({ value: c.id, label: c.name }))} error={errors.category} />
                  <SelectInput id="farmType" label="Farm type" required value={f.farmType} onChange={on("farmType")} placeholder="Select a farm type" options={farmTypes} error={errors.farmType} />
                </div>
                <fieldset>
                  <legend className="mb-1.5 text-sm font-semibold text-brand-900">Available products <span className="text-danger" aria-hidden="true">*</span></legend>
                  <div id="products" tabIndex={-1} className="grid gap-2 sm:grid-cols-2" aria-describedby={errors.products ? "products-err" : undefined}>
                    {products.map((p) => (
                      <label key={p.id} className="flex cursor-pointer items-center gap-2.5 rounded-[4px] border border-[#b5c3d4] bg-white px-3 py-2.5 text-sm">
                        <input type="checkbox" checked={f.products.includes(p.id)} onChange={() => toggleProduct(p.id)} className="h-4 w-4 accent-brand-800" />{p.name}
                      </label>
                    ))}
                  </div>
                  {errors.products && <p id="products-err" className="mt-1 text-sm font-medium text-danger">{errors.products}</p>}
                </fieldset>
                <TextArea id="description" label="Short description" rows={4} hint="Only include facts you can support." value={f.description} onChange={on("description")} />
              </fieldset>

              <fieldset className="space-y-5 rounded-[6px] border border-line bg-white p-5">
                <legend className="px-2 text-lg font-bold text-brand-900">Contact details</legend>
                <TextInput id="contactName" label="Contact person" required autoComplete="name" value={f.contactName} onChange={on("contactName")} error={errors.contactName} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput id="phone" type="tel" label="Mobile number" required autoComplete="tel" value={f.phone} onChange={on("phone")} error={errors.phone} />
                  <TextInput id="email" type="email" label="Email" required autoComplete="email" value={f.email} onChange={on("email")} error={errors.email} />
                </div>
              </fieldset>

              <fieldset className="rounded-[6px] border border-line bg-white p-5">
                <legend className="px-2 text-lg font-bold text-brand-900">Photos</legend>
                <Field id="images" label="Farm images" hint="Up to 5 images, 5 MB each. Use only photos of your own farm." error={errors.images}>
                  <input id="images" name="images" type="file" accept="image/*" multiple onChange={onFiles} aria-describedby={errors.images ? "images-err" : "images-hint"} className="block w-full text-sm file:mr-4 file:rounded-[4px] file:border-0 file:bg-mist-100 file:px-4 file:py-2 file:font-semibold file:text-brand-900" />
                </Field>
                {files.length > 0 && <ul className="mt-3 list-disc pl-5 text-sm text-ink-soft">{files.map((x) => <li key={x.name}>{x.name}</li>)}</ul>}
              </fieldset>

              <Button type="submit" size="lg">Submit listing</Button>
            </form>
          )}
        </div>

        <aside className="h-fit space-y-5 lg:sticky lg:top-24">
          <div className="rounded-[6px] border border-line bg-white p-6">
            <h2 className="text-xl font-bold">What you will need</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              <li>Farm name and location</li><li>The category that fits your farm</li><li>The products you supply</li><li>A contact person, mobile number and email</li><li>Optional photos of your own farm</li>
            </ul>
          </div>
          <div className="rounded-[6px] border border-line bg-white p-6">
            <h2 className="text-xl font-bold">Before you start</h2>
            <p className="mt-2 text-sm text-ink-soft">Read what we expect of every listing, including no unverified certification claims.</p>
            <Button to="/listing-guidelines" variant="outline" size="sm" className="mt-4">Listing guidelines</Button>
          </div>
        </aside>
      </Container>
    </>
  );
}
