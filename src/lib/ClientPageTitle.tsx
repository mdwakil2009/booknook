"use client";

import { useEffect } from "react";

const ClientPageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} | BookNook`;
  }, [title]);

  return null;
};

export default ClientPageTitle;