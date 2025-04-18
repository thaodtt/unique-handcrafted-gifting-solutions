import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Interested in a piece? Have questions about a custom order? Get in touch!</p>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <a href="mailto:your.email@example.com" className="hover:underline">
            your.email@example.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <span>+91 9968623165</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <span>+91 9810615148 (Shreya)</span>
        </div>
      </div>
    </div>
  );
}
