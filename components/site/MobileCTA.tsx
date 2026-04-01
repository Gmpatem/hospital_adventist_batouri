import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E2E8F0] shadow-lg lg:hidden">
      <div className="flex items-center justify-around h-16">
        {/* Call Button */}
        <a
          href="tel:+237123456789"
          className="flex flex-col items-center gap-1 py-2 px-4 text-[#475569] hover:text-[#0F6CBD] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/237123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2 px-4 text-[#25D366] hover:text-[#128C7E] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        {/* Appointment Button */}
        <Link
          href="/appointment"
          className="flex flex-col items-center gap-1 py-2 px-4 text-[#0F6CBD] hover:text-[#0C5A9C] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
}
