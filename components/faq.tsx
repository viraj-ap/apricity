import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="flex justify-center w-full">
      <Accordion
        type="single"
        collapsible
        className="md:w-[50vw] w-[80vw] text-white"
        defaultValue="item-1"
      >
        {/* Item 1 */}
        <AccordionItem value="item-1" className="mb-4 p-2">
          <AccordionTrigger className="text-white hover:text-[#e0d6cf] px-4">
            What services do you offer for Web3 brands?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-[#d6d6d6] px-4 pb-2">
            <p>
              We provide full-stack marketing solutions tailored for blockchain,
              NFT, and crypto-based projects—including go-to-market strategy,
              community building, social campaigns, influencer outreach, and PR.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 2 */}
        <AccordionItem value="item-2" className="mb-4 p-2">
          <AccordionTrigger className="text-white hover:text-[#e0d6cf] px-4">
            How do you grow Web3 communities effectively?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-[#d6d6d6] px-4 pb-2">
            <p>
              Community is the backbone of Web3. We grow authentic user bases via
              Discord/Telegram management, strategic partnerships, gamified
              experiences, and creator-led engagement strategies.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 3 */}
        <AccordionItem value="item-3" className="mb-4 p-2">
          <AccordionTrigger className="text-white hover:text-[#e0d6cf] px-4">
            What makes your agency different?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-[#d6d6d6] px-4 pb-2">
            <p>
              We're native to Web3 and understand the culture. Our team blends
              on-chain knowledge with real-world marketing experience, offering a
              rare mix of technical insight and brand strategy.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 4 */}
        <AccordionItem value="item-4" className="mb-4  p-2">
          <AccordionTrigger className="text-white hover:text-[#e0d6cf] px-4">
            Do you work with early-stage or established projects?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-[#d6d6d6] px-4 pb-2">
            <p>
              Both. Whether you're launching your first token or scaling a
              well-established dApp, we tailor strategies to your growth stage,
              ensuring brand alignment and maximum reach.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* ✅ Fixed Item 5 */}
        <AccordionItem value="item-5" className="mb-4 p-2">
          <AccordionTrigger className="text-white hover:text-[#e0d6cf] px-4">
            How can I get started?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-[#d6d6d6] px-4 pb-2">
            <p>
              Click the "Book Call" button to schedule a free consultation. We'll
              assess your goals, audit your presence, and recommend next steps to
              accelerate your Web3 brand.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
