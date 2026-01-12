import React, { useRef, useState, useEffect, Suspense } from "react";
import ClientManagementCards from "./ClientManagementCards";
import Common_Client_Management_Searching_And_View from "./Common_Client_Management_Searching_And_View";

function ContentAppsView() {
  const containerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: containerRef.current,
        threshold: 1.0,
        rootMargin: "-10px 0px 0px 0px",
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={containerRef}
      className="w-full h-full flex flex-col bg-whiter overflow-y-auto scroll-smooth"
    >
      <div
        ref={sentinelRef}
        className="h-px w-full shrink-0"
        aria-hidden="true"
      />

      <div className="px-6 pt-2 pb-10 flex flex-col gap-6">
        <Common_Client_Management_Searching_And_View scrolled={scrolled} />

        <Suspense
          fallback={
            <div className="min-h-screen animate-pulse bg-lighter rounded-small" />
          }
        >
          <ClientManagementCards />
        </Suspense>
      </div>
    </main>
  );
}

export default ContentAppsView;
