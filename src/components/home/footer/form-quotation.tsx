'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';

export function FormQuotation() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
    userAgent: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userAgent = navigator.userAgent;

    setLoading(true);
    setFormData((prev) => ({
      ...prev,
      userAgent,
    }));

    try {
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success('Your quotation request has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          location: '',
          phone: '',
          userAgent: '',
        });
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Failed to send request. Please try again later.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          className="bg-muted/50 border-0"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <Input
          className="bg-muted/50 border-0"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>

      <Input
        className="bg-muted/50 border-0"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, location: value })
          }
        >
          <SelectTrigger className="w-full bg-muted/50 border-0">
            <SelectValue placeholder="Location's" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jakarta">Jakarta</SelectItem>
            <SelectItem value="surabaya">Surabaya</SelectItem>
            <SelectItem value="bandung">Bandung</SelectItem>
            <SelectItem value="medan">Medan</SelectItem>
            <SelectItem value="other">Lainnya</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="bg-muted/50 border-0"
          placeholder="Phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <Button
        className="w-full rounded-full"
        disabled={loading}
        size="lg"
        type="submit"
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  );
}
