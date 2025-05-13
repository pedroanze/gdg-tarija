import { codeToHtml } from "shiki";

export async function highlightCode(code: string, lang: string = "text") {
  return await codeToHtml(code, {
    lang,
    theme: "github-light",
  });
}
