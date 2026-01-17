import { Heart, CreditCard, Building } from "lucide-react";
import { useState } from "react";

export function Donate() {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = ["25", "50", "100", "250", "500"];

  return (
    <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--charity-plum)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Heart size={40} color="white" fill="white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Make a Difference Today
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white opacity-90">
            Your generous contribution helps us continue our mission of transforming lives across Sri Lanka
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <label className="block mb-4" style={{ color: "var(--charity-dark-plum)" }}>
              Select Donation Amount (USD)
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {predefinedAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount("");
                  }}
                  className="py-3 px-4 rounded-lg transition-all"
                  style={{
                    backgroundColor: amount === preset ? "var(--charity-plum)" : "var(--charity-blush-plum)",
                    color: amount === preset ? "white" : "var(--charity-dark-plum)",
                    border: amount === preset ? "none" : "2px solid var(--charity-soft-plum)",
                  }}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(e.target.value);
              }}
              className="w-full py-3 px-4 rounded-lg"
              style={{
                border: "2px solid var(--charity-soft-plum)",
                color: "var(--charity-text-primary)",
              }}
            />
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg" style={{ color: "var(--charity-dark-plum)" }}>
              Donation Methods
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="flex items-center gap-3 p-4 rounded-lg transition-all hover:shadow-md" style={{ border: "2px solid var(--charity-soft-plum)" }}>
                <CreditCard size={24} style={{ color: "var(--charity-plum)" }} />
                <span style={{ color: "var(--charity-text-primary)" }}>Credit/Debit Card</span>
              </button>
              <button className="flex items-center gap-3 p-4 rounded-lg transition-all hover:shadow-md" style={{ border: "2px solid var(--charity-soft-plum)" }}>
                <Building size={24} style={{ color: "var(--charity-plum)" }} />
                <span style={{ color: "var(--charity-text-primary)" }}>Bank Transfer</span>
              </button>
            </div>
          </div>

          <button
            className="w-full py-4 rounded-lg text-white text-lg transition-all"
            style={{
              backgroundColor: "var(--charity-plum)",
              boxShadow: "0 4px 12px rgba(155, 92, 119, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--charity-dark-plum)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--charity-plum)";
            }}
          >
            Donate ${amount || "0"}
          </button>

          <p className="text-sm text-center mt-6" style={{ color: "var(--charity-text-secondary)" }}>
            Your donation is tax-deductible. You will receive a receipt via email.
          </p>
        </div>
      </div>
    </section>
  );
}
