import { useState } from "react";

import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/react";

import { RadioGroup, Radio } from "@nextui-org/radio";
import { Divider } from "@nextui-org/divider";
import { CalendarDate, parseDate } from "@internationalized/date";
import { DateInput, Input } from "@nextui-org/react";
import {
  EyeSlashFilledIcon,
  EyeFilledIcon,
} from "../password/EyeSlashFilledIcon.jsx";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
export default function Parametres() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { toast } = useToast();
  return (
    <div className="max-w-lg mt-10 px-4 m-8 ">
      <h1 className="text-3xl font-bold tracking-wide">Paramètres du Profil</h1>{" "}
      <Divider className="bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 my-8" />
      <div className="space-y-4 bg-primary-50/70  p-8 rounded">
        <h1 className="text-xl text-gray-100">Informations Personnel</h1>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
          <Input isReadOnly type="text" label="Nom" defaultValue="Zoey" />
          <Input isReadOnly type="text" label="Prénom" defaultValue="Doe" />
        </div>

        <div>
          {" "}
          <Input
            isReadOnly
            type="email"
            label="Email"
            defaultValue="zoey@gmail.com"
            className="max-w-xs "
          />{" "}
        </div>

        <div className="">
          <Input
            label="Password"
            placeholder="Changer votre mot de passe"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className=""
          />
        </div>
        <div className=" ">
          <Select
            label="Langue"
            className=""
            placeholder="Selectionner votre langue..."
          >
            <SelectItem
              key="argentina"
              startContent={
                <Avatar
                  alt="Argentina"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ar.svg"
                />
              }
            >
              Argentina
            </SelectItem>
            <SelectItem
              key="venezuela"
              startContent={
                <Avatar
                  alt="Venezuela"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ve.svg"
                />
              }
            >
              Venezuela
            </SelectItem>
            <SelectItem
              key="brazil"
              startContent={
                <Avatar
                  alt="Brazil"
                  className="w-6 h-6"
                  src="https://flagcdn.com/br.svg"
                />
              }
            >
              Brazil
            </SelectItem>
            <SelectItem
              key="switzerland"
              startContent={
                <Avatar
                  alt="Switzerland"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ch.svg"
                />
              }
            >
              Switzerland
            </SelectItem>
            <SelectItem
              key="germany"
              startContent={
                <Avatar
                  alt="Germany"
                  className="w-6 h-6"
                  src="https://flagcdn.com/de.svg"
                />
              }
            >
              Germany
            </SelectItem>
            <SelectItem
              key="spain"
              startContent={
                <Avatar
                  alt="Spain"
                  className="w-6 h-6"
                  src="https://flagcdn.com/es.svg"
                />
              }
            >
              Spain
            </SelectItem>
            <SelectItem
              key="france"
              startContent={
                <Avatar
                  alt="France"
                  className="w-6 h-6"
                  src="https://flagcdn.com/fr.svg"
                />
              }
            >
              France
            </SelectItem>
            <SelectItem
              key="italy"
              startContent={
                <Avatar
                  alt="Italy"
                  className="w-6 h-6"
                  src="https://flagcdn.com/it.svg"
                />
              }
            >
              Italy
            </SelectItem>
            <SelectItem
              key="mexico"
              startContent={
                <Avatar
                  alt="Mexico"
                  className="w-6 h-6"
                  src="https://flagcdn.com/mx.svg"
                />
              }
            >
              Mexico
            </SelectItem>
          </Select>
        </div>

        <div>
          {" "}
          <DateInput
            label={"Date de naissance"}
            isReadOnly
            defaultValue={parseDate("1990-04-12")}
            placeholderValue={new CalendarDate(1995, 11, 6)}
          />
        </div>
      </div>
      {/* <Divider className="bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 my-8" /> */}
      <div className="bg-primary-50/70 p-8 rounded mt-2">
        <h1 className="text-xl text-gray-100">Notifications</h1>
        <RadioGroup
          defaultValue="aucune"
          label="Sélectionnez le type de notifications que vous souhaitez recevoir."
        >
          <Radio
            onClick={() => {
              toast({
                variant: "default",
                description: "Aucune notification sélectionné",
              });
            }}
            value="aucune"
          >
            Aucune
          </Radio>
          <Radio
            onClick={() => {
              toast({
                variant: "default",
                description: "Notification Push sélectionné",
              });
            }}
            value="push"
          >
            Notifications push
          </Radio>
          <Radio
            onClick={() => {
              toast({
                variant: "default",
                description: "Notification email sélectionné",
              });
            }}
            value="email"
          >
            Notifications email
          </Radio>
          <Radio
            onClick={() => {
              toast({
                variant: "default",
                description: "Notification SMS sélectionné",
              });
            }}
            value="sms"
          >
            Notifications par SMS
          </Radio>
          <Radio
            onClick={() => {
              toast({
                variant: "default",
                description:
                  "Notification sonores sélectionné ( un son vous avertira d'une nouvelle notification )",
              });
            }}
            value="sound"
          >
            Notifications sonores
          </Radio>
        </RadioGroup>

        <Toaster />
      </div>
    </div>
  );
}
