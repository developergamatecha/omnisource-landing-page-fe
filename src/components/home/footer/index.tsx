import { Phone, Mail } from 'lucide-react';

import { FormQuotation } from './form-quotation';

export function V5Contact() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-emerald-500/10 via-green-400/5 to-orange-400/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-6">
            <span className="text-primary font-medium">Contact us</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              We value your input.
              <br />
              Share with us!
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              In our concise Frequently Asked Questions section, we&apos;ve
              compiled straightforward answers to address common queries about
              our product/service.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+88812333499</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">
                    Yourservice@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-xl font-semibold text-foreground text-center mb-6">
              We value your input
            </h3>
            <FormQuotation />
          </div>
        </div>
      </div>
    </section>
  );
}
