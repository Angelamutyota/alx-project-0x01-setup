import React, { useState, useEffect } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const initialForm = (): UserData => ({
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: ""
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
});

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState<UserData>(initialForm());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm());
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function update<T extends keyof UserData>(key: T, value: UserData[T]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function updateAddress<K extends keyof NonNullable<UserData["address"]>>(
    key: K,
    value: string
  ) {
    setForm((f) => ({
      ...f,
      address: { ...(f.address || {}), [key]: value }
    }));
  }

  function updateCompany<K extends keyof NonNullable<UserData["company"]>>(
    key: K,
    value: string
  ) {
    setForm((f) => ({
      ...f,
      company: { ...(f.company || {}), [key]: value }
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simple validation
    if (!form.name.trim() || !form.username.trim() || !form.email.trim()) {
      setError("Name, Username and Email are required.");
      return;
    }
    setError(null);
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 mx-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add User</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            value={form.username}
            onChange={(e) => update("username", e.target.value)}
            placeholder="Username"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="Email"
            type="email"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Phone"
            className="border px-3 py-2 rounded"
          />

          <input
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="Website"
            className="border px-3 py-2 rounded col-span-1 md:col-span-2"
          />

          <input
            value={form.company?.name || ""}
            onChange={(e) => updateCompany("name", e.target.value)}
            placeholder="Company name"
            className="border px-3 py-2 rounded"
          />
          <input
            value={form.company?.catchPhrase || ""}
            onChange={(e) => updateCompany("catchPhrase", e.target.value)}
            placeholder="Company catchPhrase"
            className="border px-3 py-2 rounded"
          />

          <input
            value={form.address?.street || ""}
            onChange={(e) => updateAddress("street", e.target.value)}
            placeholder="Street"
            className="border px-3 py-2 rounded"
          />
          <input
            value={form.address?.suite || ""}
            onChange={(e) => updateAddress("suite", e.target.value)}
            placeholder="Suite"
            className="border px-3 py-2 rounded"
          />
          <input
            value={form.address?.city || ""}
            onChange={(e) => updateAddress("city", e.target.value)}
            placeholder="City"
            className="border px-3 py-2 rounded"
          />
          <input
            value={form.address?.zipcode || ""}
            onChange={(e) => updateAddress("zipcode", e.target.value)}
            placeholder="Zipcode"
            className="border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-700 text-white"
          >
            Save User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
