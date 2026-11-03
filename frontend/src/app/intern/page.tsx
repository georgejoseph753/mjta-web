import { hasInternSession, isInternConfigured } from "@/lib/internSession";
import { InternScreen } from "@/components/InternScreen";

// Reads the session cookie, so this route is always rendered per-request.
export const dynamic = "force-dynamic";

export default async function InternPage() {
  return (
    <InternScreen
      authenticated={await hasInternSession()}
      configured={isInternConfigured()}
    />
  );
}
