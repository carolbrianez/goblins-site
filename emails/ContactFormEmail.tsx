import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  company: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  company,
  email,
  type,
  budget,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New signal from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://www.goblinstudios.com.br/goblin-logo.png"
            width="56"
            height="56"
            alt="Goblin Studios"
            style={logo}
          />

          <Text style={eyebrow}>◢ TRANSMISSION.RECEIVED</Text>
          <Text style={heading}>New Project Inquiry</Text>
          <Text style={subtext}>
            A new signal came through the Goblin Studios contact form.
          </Text>

          <Hr style={hr} />

          <Section>
            <Row label="NAME" value={name} />
            <Row label="COMPANY" value={company || "—"} />
            <Row label="EMAIL" value={email} />
            <Row label="PROJECT TYPE" value={type} />
            <Row label="BUDGET RANGE" value={budget} />
            <Row label="MESSAGE" value={message} />
          </Section>

          <Hr style={hr} />

          <Text style={footer}>GOBLIN STUDIOS · SÃO PAULO, BR</Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: "18px" }}>
      <Text style={label_}>◢ {label}</Text>
      <Text style={value_}>{value}</Text>
    </Section>
  );
}

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: "'Segoe UI', Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "40px 32px",
  maxWidth: "560px",
};

const logo = {
  marginBottom: "24px",
  borderRadius: "999px",
};

const eyebrow = {
  color: "#3DF62D",
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "11px",
  letterSpacing: "3px",
  fontWeight: "700" as const,
  margin: "0 0 12px",
};

const heading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "800" as const,
  letterSpacing: "0.5px",
  margin: "0 0 8px",
};

const subtext = {
  color: "#9a9a9a",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
};

const hr = {
  borderColor: "#262626",
  margin: "28px 0",
};

const label_ = {
  color: "#3DF62D",
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "10px",
  letterSpacing: "2px",
  fontWeight: "700" as const,
  margin: "0 0 4px",
};

const value_ = {
  color: "#ffffff",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "0",
};

const footer = {
  color: "#5a5a5a",
  fontFamily: "'Segoe UI', Arial, sans-serif",
  fontSize: "10px",
  letterSpacing: "2px",
  textAlign: "center" as const,
};

ContactFormEmail.PreviewProps = {
  name: "Carol Brianez",
  company: "Goblin Studios",
  email: "carol@example.com",
  type: "Full Development",
  budget: "$250K – $1M",
  message:
    "We're looking for a full development partner for our next Unreal Engine title.",
} as ContactFormEmailProps;