"use client";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { ErrorPage } from "@/shared/ui";

type SiteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const SiteError = ({ error, reset }: SiteErrorProps) => {
  return (
    <>
      <Header />
      <ErrorPage errorMessage={error.message} withWrapper={false} />
      <button onClick={reset}></button>
      <Footer />
    </>
  );
};

export default SiteError;
