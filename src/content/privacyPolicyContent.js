import React from "react";
import styles from "./styles.module.css";
export default function PrivacyPolicyContent() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Pirayo&apos;s Privacy Policy</h1>
      </div>
      <div className={styles.divider} />
      <p>
        Thank you for choosing Pirayo. This Privacy Policy outlines how we
        collect, use, share, and protect the personal information you provide to
        us while using our Ride Sharing platform and services.
        <br />
        <br />
        By using our platform and services, you agree to the terms of this
        Privacy Policy.
      </p>
      <div className={styles.divider} />
      <h3>1. Information We Collect</h3>
      <div className={styles.divider} />
      <p>
        We collect information you provide to us directly or automatically when
        you use our services. This includes:
      </p>
      <div className={styles.divider2} />

      <ul>
        <li>
          <strong>Personal Information:</strong> Name, contact details, payment
          information, and other information you provide during account
          registration and usage.
        </li>
        <li>
          <strong>Location Information:</strong> We collect your location
          information to provide accurate Ride Sharing services.
        </li>
        <li>
          <strong>Ride Details:</strong> Information about your rides, including
          pickup and drop-off locations, distance traveled, and fares.
        </li>
        <li>
          <strong>Communications:</strong> We may collect information from your
          communications with our support team or other users.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about your interactions with
          our platform, such as pages visited, features used, and preferences.
        </li>
      </ul>

      <div className={styles.divider} />
      <h3>2. How We Use Your Information</h3>
      <div className={styles.divider} />
      <ul>
        <li>
          <strong>Providing Ride Sharing services:</strong> Connecting drivers
          and passengers for rides.
        </li>
        <li>
          <strong>Customer Support:</strong> Responding to your inquiries,
          requests, and providing assistance.
        </li>
        <li>
          <strong>Improving Services:</strong> Enhancing our platform, services,
          and user experience.
        </li>
        <li>
          <strong>Personalization:</strong> Customizing your experience and
          offering relevant content.
        </li>
        <li>
          <strong>Safety and Security:</strong> Verifying users, detecting and
          preventing fraud or misuse.
        </li>
        <li>
          <strong>Legal and Regulatory Compliance:</strong> Complying with legal
          obligations and enforcing our terms.
        </li>
      </ul>

      <div className={styles.divider} />
      <h3>3. Sharing of Information</h3>
      <div className={styles.divider} />
      <ul>
        <li>
          <strong>Ride Partners:</strong> Sharing necessary details with drivers
          and passengers for the purpose of arranging rides.
        </li>
        <li>
          <strong>Service Providers:</strong> Third-party vendors and partners
          who assist in delivering our services.
        </li>
        <li>
          <strong>Legal Requirements:</strong> Complying with applicable laws,
          regulations, and government requests.
        </li>
        <li>
          <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or sale of assets, your information may be transferred.
        </li>
      </ul>

      <div className={styles.divider} />
      <h3>4. Your Choices</h3>
      <div className={styles.divider} />
      <ul>
        <li>
          <strong>Account Information:</strong> You can update or delete your
          account information from your profile settings.
        </li>
        <li>
          <strong>Location Information:</strong> You can control location access
          through your device settings.
        </li>
        <li>
          <strong>Communications:</strong> You can manage your communication
          preferences by adjusting your account settings.
        </li>
      </ul>

      <div className={styles.divider} />
      <h3>5. Data Security</h3>
      <div className={styles.divider} />
      <p>
        We implement measures to protect your information from unauthorized
        access, disclosure, and alteration. However, no data transmission over
        the internet can be guaranteed as completely secure.
      </p>

      <div className={styles.divider} />
      <h3>6. Changes to this Privacy Policy</h3>
      <div className={styles.divider} />
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of significant changes through the platform or other means. Your
        continued use of our services after changes are made indicates your
        acceptance of the updated Privacy Policy.
      </p>

      <div className={styles.divider} />
      <h3>7. Contact Us</h3>
      <div className={styles.divider} />
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy, please contact us at{" "}
        <a href="mailto:info@pirayo.com">info@pirayo.com</a>.
      </p>
    </div>
  );
}
