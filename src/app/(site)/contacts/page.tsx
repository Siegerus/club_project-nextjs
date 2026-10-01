import { ContactsSection } from "@/widgets/contacts-section";
import { Container } from "@/shared/ui/container";

const ContactsPage = () => {
  return (
    <Container>
      <div className="md:hidden -z-[1] absolute top-0 left-0 w-full h-full eclipse"></div>
      <ContactsSection />
    </Container>
  );
};

export default ContactsPage;
