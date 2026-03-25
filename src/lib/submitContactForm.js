const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreozrnp";

export async function submitContactForm(form) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    }),
  });

  if (response.ok) {
    return { ok: true };
  }

  const data = await response.json().catch(() => null);

  return {
    ok: false,
    error:
      data?.errors?.map((error) => error.message).join(", ") ||
      "There was a problem sending your message. Please try again.",
  };
}
