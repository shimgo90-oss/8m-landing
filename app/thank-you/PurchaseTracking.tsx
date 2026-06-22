"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// Fires one GA4 `purchase` event when the customer lands on /thank-you after
// a successful Stripe checkout. Lets GA attribute revenue to the ad/source/slug
// session. NOTE: this is for ad-conversion + revenue *trends* only — the source
// of truth for actual revenue is the backend payment_order / Stripe.
//
// transaction_id = Stripe Checkout Session id (passed via redirect
// ?session_id={CHECKOUT_SESSION_ID}). It dedupes refreshes/direct opens.
const BOX_PRICE = 119; // single SKU; update if pricing changes

export default function PurchaseTracking({ sessionId }: { sessionId?: string }) {
  useEffect(() => {
    const dedupeKey = sessionId ? `purchase_sent_${sessionId}` : null;
    if (dedupeKey && sessionStorage.getItem(dedupeKey)) return;

    sendGAEvent("event", "purchase", {
      transaction_id: sessionId || `box_${Date.now()}`,
      value: BOX_PRICE,
      currency: "USD",
      items: [
        {
          item_id: "custom_routine_box",
          item_name: "Custom Routine Box",
          price: BOX_PRICE,
          quantity: 1,
        },
      ],
    });

    if (dedupeKey) sessionStorage.setItem(dedupeKey, "1");
  }, [sessionId]);

  return null;
}
