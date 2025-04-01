// components/LazyAd.tsx
'use client';

import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const AdComponent = dynamic(
    () => import('@/components/ad'),
    { ssr: false }
);

export default function LazyAd() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className="col-span-3 row-span-3 row-start-12 md:col-span-3 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-span-3 lg:row-start-5 border-1 border-[#cecece] rounded-lg overflow-hidden   bg-white"
            style={{ height: "auto !important" }}
        >
            {inView && (
                <div style={{ height: "auto !important", minHeight: "0px !important" }}>
                    <div className="flex items-center text-center justify-center text-[#747171] font-medium">
                        Advertisement
                    </div>
                    <div className="ads block">
                        <AdComponent
                            data-ad-slot="222222"
                            data-ad-format="auto"
                            data-full-width-responsive={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

