import React from "react";
import { useTranslation } from "next-i18next";
const ProductName = () => {
  const { t, i18n } = useTranslation();
  return <span>{t("Learngine")}</span>;
};

export default ProductName;
