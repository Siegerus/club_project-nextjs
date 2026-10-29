"use client";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { notFoundPage } from "@/entities/company";
import { ErrorPage } from "@/shared/ui";

type SiteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const SiteError = ({ error, reset }: SiteErrorProps) => {
  return (
    <>
      <Header />
      <ErrorPage
        description={error.message}
        onReset={reset}
        resetText="Попробовать снова"
        title={notFoundPage.title}
        withContent={false}
      />
      <Footer />
    </>
  );
};

export default SiteError;
