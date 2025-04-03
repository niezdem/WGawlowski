"use client";

import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

import Container from "./ui/Container";
import Text from "./ui/Text";

type ContactItem = {
  name: string;
  value: string;
  icon: React.ElementType;
  copyValue: string;
};

type NotificationState = {
  show: boolean;
  message: string;
  animationState: "hidden" | "entering" | "visible" | "exiting";
};

type TimerRefs = {
  enter: NodeJS.Timeout | null;
  display: NodeJS.Timeout | null;
  exit: NodeJS.Timeout | null;
};

const ANIMATION_TIMING = {
  ENTER: 300,
  DISPLAY: 2000,
  EXIT: 200,
} as const;

const ANIMATION_CLASSES = {
  hidden: "opacity-0 translate-y-12 pointer-events-none",
  entering:
    "opacity-0 translate-y-12 transform transition duration-300 ease-out",
  visible:
    "opacity-100 translate-y-0 transform transition duration-300 ease-out",
  exiting: "opacity-0 translate-y-12 transform transition duration-200 ease-in",
} as const;

const contactData: ContactItem[] = [
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

const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: "",
    animationState: "hidden",
  });

  const timerRef = useRef<TimerRefs>({
    enter: null,
    display: null,
    exit: null,
  });

  const clearAllTimers = () => {
    Object.values(timerRef.current).forEach(
      (timer) => timer && clearTimeout(timer)
    );
    timerRef.current = { enter: null, display: null, exit: null };
  };

  const handleAnimationSequence = () => {
    clearAllTimers();
    setNotification((prev) => ({ ...prev, animationState: "entering" }));

    timerRef.current.enter = setTimeout(() => {
      setNotification((prev) => ({ ...prev, animationState: "visible" }));

      timerRef.current.display = setTimeout(() => {
        setNotification((prev) => ({ ...prev, animationState: "exiting" }));

        timerRef.current.exit = setTimeout(() => {
          setNotification({
            show: false,
            message: "",
            animationState: "hidden",
          });
        }, ANIMATION_TIMING.EXIT);
      }, ANIMATION_TIMING.DISPLAY);
    }, ANIMATION_TIMING.ENTER);
  };

  useEffect(() => {
    if (notification.show) {
      handleAnimationSequence();
    }
    return clearAllTimers;
  }, [notification.show]);

  const showNotification = (message: string) => {
    if (notification.show) {
      setNotification((prev) => ({
        ...prev,
        message,
        animationState:
          prev.animationState === "exiting" ? "visible" : prev.animationState,
      }));

      if (timerRef.current.display) clearTimeout(timerRef.current.display);
      if (timerRef.current.exit) clearTimeout(timerRef.current.exit);

      timerRef.current.display = setTimeout(() => {
        setNotification((prev) => ({ ...prev, animationState: "exiting" }));

        timerRef.current.exit = setTimeout(() => {
          setNotification({
            show: false,
            message: "",
            animationState: "hidden",
          });
        }, ANIMATION_TIMING.EXIT);
      }, ANIMATION_TIMING.DISPLAY);
    } else {
      setNotification({ show: true, message, animationState: "hidden" });
    }
  };

  return {
    notification,
    showNotification,
    notificationClasses: ANIMATION_CLASSES[notification.animationState],
  };
};

const NotificationComponent: React.FC<{
  message: string;
  className: string;
}> = ({ message, className }) => (
  <div
    className="fixed md:bottom-8 md:top-auto top-8 inset-x-0 flex justify-center items-center z-50"
    aria-live="assertive"
  >
    <div
      className={`bg-amber-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-x-3 max-w-sm mx-4 ${className}`}
    >
      <div className="flex-shrink-0 bg-white rounded-full p-1">
        <CheckIcon className="h-4 w-4 text-amber-700" aria-hidden="true" />
      </div>
      <Text size={{ default: "sm" }} color="text-white">
        {message}
      </Text>
    </div>
  </div>
);

const ContactItem = React.memo<{
  item: ContactItem;
  onCopy: (text: string, name: string) => void;
}>(({ item, onCopy }) => (
  <div className="flex flex-col">
    <Text size={{ default: "sm" }} weight="semibold">
      {item.name}
    </Text>
    <div className="flex items-center gap-x-2">
      <item.icon className="h-5 w-5 text-amber-700" aria-hidden="true" />
      <button
        onClick={() => onCopy(item.copyValue, item.name)}
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
));

ContactItem.displayName = "ContactItem";

const Footer: React.FC = () => {
  const { notification, showNotification, notificationClasses } =
    useNotification();

  const copyToClipboard = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(`${name} skopiowany do schowka`);
    } catch (err) {
      console.error("Nie udało się skopiować: ", err);
    }
  };

  return (
    <footer className="mt-16 sm:mt-32 border-t border-stone-200 bg-stone-50">
      <Container className="py-12 sm:py-16 relative">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          {notification.show && (
            <NotificationComponent
              message={notification.message}
              className={notificationClasses}
            />
          )}

          <div className="grid gap-x-8 gap-y-4 sm:gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactData.map((item) => (
              <ContactItem
                key={item.name}
                item={item}
                onCopy={copyToClipboard}
              />
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
