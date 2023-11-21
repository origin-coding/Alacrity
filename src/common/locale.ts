type locales = "en" | "zhHans";

export default locales;

interface LocalizedMessage {
  [key: string]: string;
}

type LocalizedMessages = {
  [locale in locales]: LocalizedMessage;
};

export { type LocalizedMessages };
