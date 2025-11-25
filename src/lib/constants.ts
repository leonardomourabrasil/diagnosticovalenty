export const CALENDLY_URL = "https://calendly.com/carlosmaciel";

export const CALENDLY_UTM = {
  source: "valenty-lp",
  medium: "button",
  campaign: "diagnostico",
} as const;

export function buildCalendlyUrl(_content: string) {
  return CALENDLY_URL;
}