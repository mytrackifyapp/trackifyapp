import * as React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import Footer from "./footer";
import Footnote from "./footnote";
import { applicationClientUrls } from "@/components/constant/urls";

const settingUrl = applicationClientUrls.host.home + "/v1/settings";

export default function PlanExpiredEmail({ plan = "Premium Plan" }) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>{`${plan} Expired!`}</Preview>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[22px]">
              <Img
                src="/trackifylogo.jpg"
                width="50"
                height="50"
                alt="trackify logo"
                className="block m-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[24px] mt-[12px] mx-0">
              {plan} Expired
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">Hi,</Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Your account{"'"}s <b>{plan}</b> has expired.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              No worries, all data still there. Renew <b>Premium Plan</b> to
              continue enjoying premium features on Expense.fyi.
            </Text>
            <Link
              className="bg-[#000000] inline-block p-2.5 px-3 rounded-md text-white text-[12px] font-medium no-underline text-center"
              href={settingUrl}
            >
              Renew now
            </Link>

            <Footnote />
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
