import React, { useEffect } from 'react';

/**
 * Google AdSense Component
 * @param {string} adSlot - The ID of the ad slot from Google AdSense
 * @param {string} adFormat - 'auto', 'fluid', etc.
 * @param {boolean} responsive - Whether the ad is responsive
 */
const AdSense = ({ adSlot, adFormat = 'auto', responsive = true }) => {
    useEffect(() => {
        try {
            // Check if adsbygoogle is defined (script loaded)
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className="ad-content-wrapper" style={{ overflow: 'hidden', margin: '15px 0', minHeight: '100px', width: '100%', textAlign: 'center' }}>
            {/* This is a placeholder for Google AdSense */}
            {/* Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your real data-ad-client */}
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2438528235141208"
                data-ad-slot={adSlot || "YOUR_AD_SLOT_ID"}
                data-ad-format={adFormat}
                data-full-width-responsive={responsive ? "true" : "false"}>
            </ins>

            {/* Visual placeholder for the user to see where the ad will be */}
            <div style={{
                padding: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px dashed #444',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#666'
            }}>
                광고가 게재될 영역입니다 (AdSense Unit)
            </div>
        </div>
    );
};

export default AdSense;
