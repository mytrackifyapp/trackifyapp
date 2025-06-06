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
import { applicationClientUrls } from "../constant/urls";
import Footnote from "./footnote";
import Footer from "./footer";

export default function InvoiceSuccessEmail() {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Trackify Premium Payment Successful</Preview>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[22px]">
              <Img
                src="/trackifylogo.jpg"
                width="50"
                height="50"
                alt="Trackify logo"
                className="block m-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[24px] mt-[12px] mx-0">
              Payment Confirmation and Premium Plan Activation
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">Hi,</Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We are pleased to inform you that your payment of ₹50.00 has been
              successfully processed. Your premium plan for Trackify is now
              active, providing you with enhanced features and benefits.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for choosing Trackify.
            </Text>

            <Footnote />
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
