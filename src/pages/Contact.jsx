import { Form, useActionData, useNavigation } from "react-router-dom";

export const Contact = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="mx-auto max-w-xl p-10 text-white">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      {data && data.message && (
        <p className="mt-4 rounded-lg bg-green-900/50 p-3 text-green-300">
          {data.message}
        </p>
      )}

      <Form method="POST" action="/contact" className="mt-6 flex flex-col gap-4">
        <input name="name" placeholder="Your Name" required className="rounded-lg bg-slate-800 p-3" />
        <input name="email" type="email" placeholder="Email" required className="rounded-lg bg-slate-800 p-3" />
        <textarea name="message" placeholder="We are here to always help you" required rows="4" className="rounded-lg bg-slate-800 p-3"></textarea>

        <button disabled={isSubmitting} className="rounded-xl bg-indigo-600 py-3 font-semibold hover:bg-indigo-500 disabled:opacity-50">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </Form>
    </div>
  );
};

// ACTION FUNCTION
export const contactAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data); // { name: "...", email: "...", message: "..." }

  // Here send to API / backend
  // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })

  // For now just return success message
  return { message: `Thanks ${data.name}, we got your message!` };
};