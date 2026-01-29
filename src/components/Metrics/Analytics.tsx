'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import ClarityInit from '@/components/Metrics/ClarityInit';

export default function Analytics({
  gaId,
  clarityId,
}: {
  gaId: string;
  clarityId: string;
}) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId={gaId} trackPageViews />
      <ClarityInit clarityId={clarityId} />
    </>
  );
}
