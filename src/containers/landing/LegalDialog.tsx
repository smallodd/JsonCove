"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";

export default function LegalDialog({
  title,
  description,
  href,
  openPageLabel,
  closeLabel,
  children,
}: {
  title: string;
  description: string;
  href: "/privacy" | "/terms";
  openPageLabel: string;
  closeLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-fit cursor-pointer text-left transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        {title}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#102b25]/60 backdrop-blur-[3px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed inset-2 z-50 mx-auto flex max-w-2xl flex-col overflow-hidden rounded-[1.5rem] border border-[#dce7df] bg-white text-[#173d36] shadow-[0_30px_100px_rgba(9,40,31,0.32)] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 sm:inset-x-6 sm:inset-y-[8vh] sm:max-h-[760px]">
          <div className="shrink-0 border-b border-[#dce7df] bg-[#f3f8f3] px-6 py-6 pr-14 sm:px-9 sm:py-8">
            <Dialog.Title className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{title}</Dialog.Title>
            <Dialog.Description className="mt-2 max-w-xl text-sm leading-6 text-[#597169]">
              {description}
            </Dialog.Description>
          </div>
          <div className="legal-content legal-dialog-content min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-9 sm:py-8">
            {children}
          </div>
          <div className="flex shrink-0 items-center justify-between border-t border-[#e2eae4] bg-white px-6 py-4 sm:px-9">
            <Link
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#32775b] hover:text-[#173d36]"
            >
              {openPageLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Dialog.Close className="rounded-lg border border-[#dce7df] px-4 py-2 text-sm font-medium text-[#315448] hover:bg-[#f3f8f3]">
              {closeLabel}
            </Dialog.Close>
          </div>
          <Dialog.Close
            aria-label={closeLabel}
            className="absolute right-5 top-5 rounded-lg p-2 text-[#597169] hover:bg-white/70 hover:text-[#173d36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#32775b]"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
