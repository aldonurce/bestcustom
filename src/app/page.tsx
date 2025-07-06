import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, MapPin } from "lucide-react";

export default function BestCustomTailors() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Best Custom Tailors</h1>
        <p className="text-lg text-gray-600">
          Master Tailoring & Equestrian Wear - Brooklyn's Finest Since the 1990s
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="text-gray-700">
          With over 40 years of experience, Best Custom Tailors is led by a master tailor dedicated to the highest standards of craftsmanship. Located in the heart of Greenpoint, Brooklyn, our shop has been providing premium equestrian and custom suit tailoring since the 1990s.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Equestrian Tailoring</li>
          <li>Custom Suits & Jackets</li>
          <li>Alterations & Repairs</li>
          <li>Formalwear for Men & Women</li>
        </ul>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Location
            </h3>
            <p>276 Greenpoint Avenue, Brooklyn, NY</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" /> Hours
            </h3>
            <p>Monday - Friday</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700">Call or book an appointment below.</p>
        <p className="text-gray-900 font-medium">Phone: <a href="tel:8625717584" className="underline">(862) 571-7584</a></p>

        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Your Name" required />
          <Input placeholder="Email Address" type="email" required />
          <Input placeholder="Phone Number" />
          <Input placeholder="Preferred Date" type="date" />
          <Textarea className="md:col-span-2" placeholder="Tell us what you need..." />
          <Button type="submit" className="md:col-span-2 w-full">Request Appointment</Button>
        </form>
      </section>
    </div>
  );
}
