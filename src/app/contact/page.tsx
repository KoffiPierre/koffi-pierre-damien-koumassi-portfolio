'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { ContactFormData } from '@/lib/types';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Card, { CardBody } from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (tu peux intégrer EmailJS ou une API ici)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: siteConfig.author.email,
      link: `mailto:${siteConfig.author.email}`,
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: FaPhone,
      label: { fr: 'Téléphone', en: 'Phone' },
      value: siteConfig.author.phone,
      link: `tel:${siteConfig.author.phone}`,
      color: 'from-accent-cyan to-accent-sky',
    },
    {
      icon: FaMapMarkerAlt,
      label: { fr: 'Localisation', en: 'Location' },
      value: siteConfig.author.location,
      link: null,
      color: 'from-accent-indigo to-primary-600',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title={language === 'fr' ? 'Contactez-moi' : 'Contact Me'}
            subtitle={language === 'fr' 
              ? 'Une idée de projet, une opportunité ou simplement échanger — je suis disponible.' 
              : 'A project idea, an opportunity, or just a chat — I\'m available.'}
            centered
          />
        </motion.div>
      </Section>

      {/* Contact Info Cards */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover={!!info.link} className="h-full">
                <CardBody className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {typeof info.label === 'string' ? info.label : info.label[language]}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-primary-600 hover:underline break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-neutral-600">{info.value}</p>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {language === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    {language === 'fr' 
                      ? '✅ Message envoyé avec succès ! Je vous répondrai bientôt.' 
                      : '✅ Message sent successfully! I will reply soon.'}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        {language === 'fr' ? 'Nom complet' : 'Full name'} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Sujet' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {!isSubmitting && <FaPaperPlane className="mr-2" />}
                    {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          {/* Sidebar - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <Card>
              <CardBody>
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  {language === 'fr' ? 'Réseaux sociaux' : 'Social Media'}
                </h3>
                <div className="space-y-3">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaGithub className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">GitHub</p>
                      <p className="text-xs text-neutral-600">
                        {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaLinkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">LinkedIn</p>
                      <p className="text-xs text-neutral-600">
                        {language === 'fr' ? 'Connectons-nous' : 'Let\'s connect'}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.social.email}
                    className="flex items-center gap-3 p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">Email</p>
                      <p className="text-xs text-neutral-600">
                        {language === 'fr' ? 'Envoyez un mail' : 'Send an email'}
                      </p>
                    </div>
                  </a>
                </div>
              </CardBody>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardBody>
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  {language === 'fr' ? 'Disponibilité' : 'Availability'}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-neutral-600">
                      {language === 'fr' 
                        ? 'Ouvert aux opportunités' 
                        : 'Open to opportunities'}
                    </span>
                  </div>
                  <p className="text-neutral-600">
                    {language === 'fr' 
                      ? 'AI Engineering · Data Engineering · Full-Stack' 
                      : 'AI Engineering · Data Engineering · Full-Stack'}
                  </p>
                  <p className="text-neutral-500 text-xs">
                    {language === 'fr' 
                      ? 'Réponse sous 24h' 
                      : 'Response within 24h'}
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Map Section (Optional) */}
      <Section className="bg-neutral-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaMapMarkerAlt className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            {language === 'fr' ? 'Basé à Casablanca' : 'Based in Casablanca'}
          </h2>
          <p className="text-neutral-600 mb-4">
            {siteConfig.author.location}
          </p>
          <p className="text-sm text-neutral-500">
            {language === 'fr' 
              ? 'Disponible pour rencontres en personne ou visioconférences' 
              : 'Available for in-person meetings or video calls'}
          </p>
        </div>
      </Section>
    </>
  );
}