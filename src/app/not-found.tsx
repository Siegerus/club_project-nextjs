import { type Metadata } from "next";

import { ErrorPage } from "@/shared/ui";

export const metadata: Metadata = {
  title: "404 Страница не найдена",
  description: "Запрошенная страница не существует или была перемещена.",
};

const NotFound = () => <ErrorPage />;

export default NotFound;
