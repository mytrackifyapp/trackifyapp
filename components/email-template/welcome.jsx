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

import Footer from "@/components/email-template/footer";
import Footnote from "@/components/email-template/footnote";
import { applicationClientUrls } from "@/components/constant/urls";

const baseUrl = applicationClientUrls.host.home;

export default function WelcomeEmail() {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Welcome to {applicationClientUrls.config.appName}</Preview>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[22px] bg-white">
              <Img
                src="https://trackifyapp.onrender.com/trackifylogo.jpg"
                width="50"
                height="50"
                alt="trackify logo"
                className="block m-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[24px] mt-[22px] mx-0">
              Welcome to {applicationClientUrls.config.appName}
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
            Hello, I'm {applicationClientUrls.config.developerName}, the developer behind {applicationClientUrls.config.appName}, a user-friendly expense tracker designed to simplify financial management. We're thrilled to welcome you aboard!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Here is how you can get started:
            </Text>

            <Text className="m-1">
              1. Watch a demo video on how to use Trackify{" "}
              <Link
                href="https://www.youtube.com/useTrackifyApp"
                target="_blank"
                className="underline"
              >
                YouTube
              </Link>{" "}
              Link.
            </Text>
            <Text className="m-1">
              2. Follow us on <br />
              <Link
                href="https://www.instagram.com/mytrackifyapp"
                target="_blank"
                className="underline"
              >
                Instagram
              </Link>
              <br />
              <Link
                href="https://www.x.com/trackifyAI"
                target="_blank"
                className="underline"
              >
                X
              </Link>
              <br />
              
            </Text>
            <Text className="m-1">3. Finally, spread some word about us.</Text>

            <Link
              href={baseUrl}
              className="bg-[#000000] mt-2 inline-block p-2.5 px-3 rounded-md text-white text-[12px] font-medium no-underline text-center"
            >
              Get started
            </Link>

            <Footnote />
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
