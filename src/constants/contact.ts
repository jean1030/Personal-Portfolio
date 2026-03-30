const fallbackEmail = "tiongson.jenniferantonette@gmail.com";

export const CONTACT_EMAIL = (
  import.meta.env.VITE_CONTACT_EMAIL || fallbackEmail
).trim();

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;