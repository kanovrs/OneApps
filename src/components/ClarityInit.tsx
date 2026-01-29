'use client';

import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

export default function ClarityInit({ clarityId }: { clarityId: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && clarityId) {
      Clarity.init(clarityId);
    }
  }, [clarityId]);
  return null;
}
