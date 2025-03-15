"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Listbox,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Text from "./ui/Text";

const languages = [
  { code: "pl", name: "Polski" },
  { code: "en", name: "English" },
];

const NavBar = () => {
  const router = useRouter();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  const selectedLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const t = useTranslations("Navbar");

  const navBar = [
    { link: "#home", title: t("home") },
    { link: "#about", title: "About" },
    { link: "#projects", title: "Projects" },
    { link: "#partners", title: "Partners" },
    { link: "#certificates", title: "Certificates" },
    { link: "#contacts", title: "Contacts" },
  ];

  return (
    <nav className="bg-gray-100">
      <div className="w-container flex flex-shrink-0 items-center justify-between !py-4">
        <section className="flex items-center gap-4">
          {navBar.map((props, key) => (
            <Link key={key} href={props.link}>
              <Text>{props.title}</Text>
            </Link>
          ))}
          <Link href="/">
            <div className="flex items-center gap-2"></div>
          </Link>
        </section>
        <Listbox
          value={selectedLanguage}
          onChange={(lang) => switchLanguage(lang.code)}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selectedLanguage.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <ListboxOption
                    key={language.code}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {language.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </nav>
  );
};

export default NavBar;
