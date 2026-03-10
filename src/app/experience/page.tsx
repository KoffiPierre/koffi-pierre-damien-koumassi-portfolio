'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { formatDate, calculateDuration } from '@/lib/utils';
import { Experience } from '@/lib/types';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Badge from '@/components/common/Badge';
import experiencesData from '@/data/experiences.json';

export default function ExperiencePage() {
  const { language } = useLanguage();
  const experiences = experiencesData as Experience[];

  const typeLabels = {
    pfa: { fr: 'Mission IA/ML', en: 'AI/ML Mission' },
    fulltime: { fr: 'CDI', en: 'Full-time' },
    internship: { fr: 'Mission', en: 'Mission' },
    training: { fr: 'Formation', en: 'Training' },
  };

  const typeColors: Record<string, 'primary' | 'secondary' | 'success' | 'warning'> = {
    pfa: 'primary',
    fulltime: 'success',
    internship: 'secondary',
    training: 'warning',
  };

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
            title={language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
            subtitle={language === 'fr' 
              ? 'Mon parcours professionnel et mes réalisations' 
              : 'My professional journey and achievements'}
            centered
          />
        </motion.div>
      </Section>

      {/* Timeline */}
      <Section>
        <Container size="lg">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200" />

            {/* Experiences */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={typeColors[exp.type]}>
                            {typeLabels[exp.type][language]}
                          </Badge>
                          {exp.period.end === 'present' && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                              {language === 'fr' ? 'En cours' : 'Current'}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {exp.title[language]}
                        </h3>
                        <p className="text-primary-600 font-medium mb-3">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-4 h-4" />
                            {formatDate(exp.period.start, language)} - {formatDate(exp.period.end, language)}
                          </span>
                          <span className="text-neutral-500">
                            ({calculateDuration(exp.period.start, exp.period.end, language)})
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-neutral-600 flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{desc[language]}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <FaBriefcase className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Empty space on other side */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section className="bg-neutral-50">
        <SectionTitle
          title={language === 'fr' ? 'Leadership & Engagement' : 'Leadership & Engagement'}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-neutral-200 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {language === 'fr' ? 'Responsable GBU Sidi Othman' : 'GBU Sidi Othman Manager'}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">2022 - 2024</p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• {language === 'fr' ? 'Management d\'une équipe' : 'Management of a team'}</li>
                  <li>• {language === 'fr' ? 'Organisation d\'événements' : 'Organization of events'}</li>
                  <li>• {language === 'fr' ? 'Développement de partenariats locaux' : 'Development of local partnerships'}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-neutral-200 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {language === 'fr' ? 'Membre Actif' : 'Active Member'}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">
                  {language === 'fr' ? 'Associations GBU, C3EC, AEBM' : 'GBU, C3EC, AEBM Associations'}
                </p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• {language === 'fr' ? 'Participation active aux initiatives étudiantes' : 'Active participation in student initiatives'}</li>
                  <li>• {language === 'fr' ? 'Projets collaboratifs' : 'Collaborative projects'}</li>
                  <li>• {language === 'fr' ? 'Développement de la vie associative' : 'Development of associative life'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}