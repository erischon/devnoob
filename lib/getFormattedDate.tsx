export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
