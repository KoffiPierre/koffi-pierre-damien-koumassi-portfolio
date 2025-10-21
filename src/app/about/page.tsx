'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import Card, { CardBody } from '@/components/common/Card';
import { downloadResume } from '@/lib/utils';
import Image from "next/image";

export default function AboutPage() {
  const { language } = useLanguage();

  const education = [
    {
      degree: {
        fr: "Cycle d'Ingénieur - Intelligence Artificielle & Génie Informatique",
        en: "Engineering Degree - Artificial Intelligence & Computer Engineering"
      },
      institution: "École Nationale Supérieure d'Arts et Métiers (ENSAM)",
      location: "Casablanca, Maroc",
      period: "Septembre 2023 - Juillet 2025",
      current: true,
    },
    {
      degree: {
        fr: "Classes Préparatoires Intégrées",
        en: "Integrated Preparatory Classes"
      },
      institution: "École Nationale Supérieure d'Arts et Métiers (ENSAM)",
      location: "Casablanca, Maroc",
      period: "Septembre 2021 - Juillet 2023",
      current: false,
    },
  ];

  const values = [
    {
      icon: FaCode,
      title: { fr: "Excellence Technique", en: "Technical Excellence" },
      description: {
        fr: "Passion pour le code propre, maintenable et performant avec une veille technologique constante",
        en: "Passion for clean, maintainable and performant code with constant technological watch"
      },
    },
    {
      icon: FaLightbulb,
      title: { fr: "Innovation", en: "Innovation" },
      description: {
        fr: "Curiosité scientifique et approche créative pour résoudre des problèmes complexes",
        en: "Scientific curiosity and creative approach to solve complex problems"
      },
    },
    {
      icon: FaGraduationCap,
      title: { fr: "Apprentissage Continu", en: "Continuous Learning" },
      description: {
        fr: "Adaptabilité aux nouvelles technologies et frameworks émergents en IA",
        en: "Adaptability to new technologies and emerging AI frameworks"
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title={language === 'fr' ? 'À propos de moi' : 'About Me'}
            subtitle={language === 'fr' 
              ? 'Découvrez mon parcours et mes motivations' 
              : 'Discover my journey and motivations'}
            centered
          />
        </motion.div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardBody>
                {/* Photo */}
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan overflow-hidden mb-6">
                  <Image 
                    src="/images/profile.jpg" 
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {siteConfig.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {siteConfig.author.role[language]}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>📍 {siteConfig.author.location}</p>
                    <p>📧 {siteConfig.author.email}</p>
                    <p>📞 {siteConfig.author.phone}</p>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => downloadResume(language)}
                  >
                    <FaDownload className="mr-2" />
                    {language === 'fr' ? 'Télécharger CV' : 'Download Resume'}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {language === 'fr' ? 'Qui suis-je ?' : 'Who am I?'}
              </h2>
              <div className="prose prose-lg text-neutral-600 space-y-4">
                <p>
                  {language === 'fr' 
                    ? "Étudiant en 3ème année du cycle d'ingénieur en Intelligence Artificielle à l'ENSAM Casablanca, je suis passionné par le développement d'applications intelligentes qui résolvent des problèmes concrets."
                    : "3nd-year Artificial Intelligence Engineering student at ENSAM Casablanca, I am passionate about developing intelligent applications that solve real-world problems."}
                </p>
                <p>
                  {language === 'fr'
                    ? "Mon parcours m'a permis de développer une expertise solide en Machine Learning, Deep Learning et Développement Logiciel, que j'ai appliquée à des projets variés allant de la sécurité urbaine intelligente aux systèmes de trading automatisés."
                    : "My journey has allowed me to develop solid expertise in Machine Learning, Deep Learning and Software Development, which I have applied to various projects ranging from intelligent urban security to automated trading systems."}
                </p>
                <p>
                  {language === 'fr'
                    ? "En tant que développeur Full-Stack, je maîtrise également les technologies web modernes (React, Angular, Laravel) ce qui me permet de créer des solutions complètes de bout en bout."
                    : "As a Full-Stack developer, I also master modern web technologies (React, Angular, Laravel) which allows me to create complete end-to-end solutions."}
                </p>
                <p>
                  {language === 'fr'
                    ? "Je recherche actuellement un stage PFE dans le domaine de l'IA et de l'ingénieurie logicielle pour contribuer à des projets d'envergure tout en enrichissant mon expertise technique."
                    : "I am currently looking for a final year internship in the AI field to contribute to large-scale projects while enriching my technical expertise."}
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                {language === 'fr' ? 'Mes valeurs' : 'My Values'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardBody className="text-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <value.icon className="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {value.title[language]}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          {value.description[language]}
                        </p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education */}
      <Section className="bg-neutral-50">
        <SectionTitle
          title={language === 'fr' ? 'Formation' : 'Education'}
          subtitle={language === 'fr' 
            ? 'Mon parcours académique' 
            : 'My academic background'}
          centered
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardBody>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-neutral-900">
                          {edu.degree[language]}
                        </h3>
                        {edu.current && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            {language === 'fr' ? 'En cours' : 'Current'}
                          </span>
                        )}
                      </div>
                      <p className="text-primary-600 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-neutral-600 mb-2">
                        📍 {edu.location}
                      </p>
                      <p className="text-sm text-neutral-500">
                        📅 {edu.period}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Interests */}
      <Section>
        <SectionTitle
          title={language === 'fr' ? "Centres d'intérêt" : 'Interests'}
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🎹', label: { fr: 'Piano', en: 'Piano' } },
            { icon: '🤝', label: { fr: 'Bénévolat', en: 'Volunteering' } },
            { icon: '📚', label: { fr: 'Lecture Tech', en: 'Tech Reading' } },
            { icon: '🎯', label: { fr: 'Innovation', en: 'Innovation' } },
          ].map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center mx-auto mb-3 hover:border-primary-500 transition-colors">
                <span className="text-4xl">{interest.icon}</span>
              </div>
              <p className="text-sm font-medium text-neutral-700">
                {interest.label[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}