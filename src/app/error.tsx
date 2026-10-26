"use client";

import { ErrorPage } from "@/shared/ui";

type SiteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const SiteError = ({ error, reset }: SiteErrorProps) => {
  return (
    <>
      <ErrorPage errorMessage={error.message} />
      <button onClick={reset}></button>
    </>
  );
};

export default SiteError;
