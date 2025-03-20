"use client";

import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

import Container from "./ui/Container";
import Text from "./ui/Text";

const contactData = [
  {
    name: "Telefon",
    value: "602 673 464",
    icon: PhoneIcon,
    copyValue: "602673464",
  },
  {
    name: "E-mail",
    value: "wgawlowski@op.pl",
    icon: EnvelopeIcon,
    copyValue: "wgawlowski@op.pl",
  },
  {
    name: "NIP",
    value: "894 234 20 35",
    icon: BuildingOfficeIcon,
    copyValue: "894 234 20 35",
  },
  {
    name: "REGON",
    value: "931 88 48 40",
    icon: DocumentTextIcon,
    copyValue: "931 88 48 40",
  },
];

const Footer = () => {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    animationState: "hidden", // 'hidden', 'entering', 'visible', 'exiting'
  });

  // Store timers so we can clear them
  const timerRef = useRef<{
    enter: NodeJS.Timeout | null;
    display: NodeJS.Timeout | null;
    exit: NodeJS.Timeout | null;
  }>({
    enter: null,
    display: null,
    exit: null,
  });

  // Clear all timers
  const clearAllTimers = () => {
    if (timerRef.current.enter) clearTimeout(timerRef.current.enter);
    if (timerRef.current.display) clearTimeout(timerRef.current.display);
    if (timerRef.current.exit) clearTimeout(timerRef.current.exit);
    timerRef.current = { enter: null, display: null, exit: null };
  };

  // Handle notification display changes
  useEffect(() => {
    if (notification.show) {
      // First clear previous timers
      clearAllTimers();

      // Start new animation
      setNotification((prev) => ({ ...prev, animationState: "entering" }));

      // After enter animation completes
      timerRef.current.enter = setTimeout(() => {
        setNotification((prev) => ({ ...prev, animationState: "visible" }));

        // Set display timer
        timerRef.current.display = setTimeout(() => {
          setNotification((prev) => ({ ...prev, animationState: "exiting" }));

          // Set exit timer
          timerRef.current.exit = setTimeout(() => {
            setNotification({
              show: false,
              message: "",
              animationState: "hidden",
            });
          }, 200); // Exit animation duration
        }, 2000); // Notification display duration
      }, 300); // Enter animation duration
    }

    return () => {
      // Clear timers when component unmounts
      clearAllTimers();
    };
  }, [notification.show]);

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // If notification is already showing, just update the message
        if (notification.show) {
          setNotification((prev) => ({
            ...prev,
            message: `${name} skopiowany do schowka`,
            // If currently exiting, return to visible state
            animationState:
              prev.animationState === "exiting"
                ? "visible"
                : prev.animationState,
          }));

          // Clear display and exit timers to reset display time
          if (timerRef.current.display) clearTimeout(timerRef.current.display);
          if (timerRef.current.exit) clearTimeout(timerRef.current.exit);

          // Set new display timer
          timerRef.current.display = setTimeout(() => {
            setNotification((prev) => ({ ...prev, animationState: "exiting" }));

            // Set new exit timer
            timerRef.current.exit = setTimeout(() => {
              setNotification({
                show: false,
                message: "",
                animationState: "hidden",
              });
            }, 200);
          }, 2000);
        } else {
          // If notification isn't showing, show new one
          setNotification({
            show: true,
            message: `${name} skopiowany do schowka`,
            animationState: "hidden",
          });
        }
      },
      (err) => {
        console.error("Nie udało się skopiować: ", err);
      }
    );
  };

  // Animation classes based on state
  const notificationClasses = {
    hidden: "opacity-0 translate-y-12 pointer-events-none",
    entering:
      "opacity-0 translate-y-12 transform transition duration-300 ease-out",
    visible:
      "opacity-100 translate-y-0 transform transition duration-300 ease-out",
    exiting:
      "opacity-0 translate-y-12 transform transition duration-200 ease-in",
  }[notification.animationState];

  return (
    <footer className="mt-16 sm:mt-32 border-t border-stone-200 bg-stone-50">
      <Container className="py-12 sm:py-16 relative">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none ">
          {/* Notification */}
          <div
            className="fixed md:bottom-8 md:top-auto top-8 inset-x-0 flex justify-center items-center z-50"
            aria-live="assertive"
          >
            <div
              className={`bg-amber-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-x-3 max-w-sm mx-4 ${notificationClasses}`}
            >
              <div className="flex-shrink-0 bg-white rounded-full p-1">
                <CheckIcon
                  className="h-4 w-4 text-amber-700"
                  aria-hidden="true"
                />
              </div>
              <Text size={{ default: "sm" }} color="text-white">
                {notification.message}
              </Text>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-4 sm:gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactData.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Text size={{ default: "sm" }} weight="semibold">
                  {item.name}
                </Text>
                <div className="flex items-center gap-x-2">
                  <item.icon
                    className="h-5 w-5 text-amber-700"
                    aria-hidden="true"
                  />
                  <button
                    onClick={() => copyToClipboard(item.copyValue, item.name)}
                    className="text-amber-700 hover:text-amber-600 inline-block cursor-pointer"
                  >
                    <Text
                      size={{ default: "base" }}
                      color="inherit"
                      className="hover:underline whitespace-nowrap"
                    >
                      {item.value}
                    </Text>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-stone-200 pt-8">
            <Text
              size={{ default: "sm" }}
              color="text-stone-400"
              className="text-center"
            >
              &copy; 2025 Wojciech Gawłowski. Zakład Usług Instalacyjnych.
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
