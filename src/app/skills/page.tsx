'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { SkillCategory } from '@/lib/types';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Card, { CardBody, CardHeader } from '@/components/common/Card';
import skillsData from '@/data/skills.json';

export default function SkillsPage() {
  const { language } = useLanguage();
  const skillCategories = skillsData as SkillCategory[];

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
            title={language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
            subtitle={language === 'fr' 
              ? 'Un aperçu de mes compétences et technologies maîtrisées' 
              : 'An overview of my skills and mastered technologies'}
            centered
          />
        </motion.div>
      </Section>

      {/* Skills Grid */}
      <Section>
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {category.name[language]}
                  </h2>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-neutral-900">
                            {skill.name}
                          </span>
                          <span className="text-sm text-neutral-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-600 to-accent-cyan rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Summary */}
      <Section className="bg-neutral-50">
        <SectionTitle
          title={language === 'fr' ? 'Qualités Professionnelles' : 'Professional Qualities'}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: '🎯',
              title: { fr: 'Résolution de problèmes', en: 'Problem Solving' },
              description: {
                fr: 'Approche analytique et méthodique pour résoudre des problèmes complexes',
                en: 'Analytical and methodical approach to solve complex problems'
              },
            },
            {
              icon: '🔬',
              title: { fr: 'Curiosité scientifique', en: 'Scientific Curiosity' },
              description: {
                fr: 'Veille technologique constante en IA et nouvelles technologies',
                en: 'Constant technological watch in AI and new technologies'
              },
            },
            {
              icon: '🚀',
              title: { fr: 'Adaptabilité', en: 'Adaptability' },
              description: {
                fr: 'Capacité à apprendre rapidement de nouveaux frameworks et technologies',
                en: 'Ability to quickly learn new frameworks and technologies'
              },
            },
            {
              icon: '⚡',
              title: { fr: 'Rigueur', en: 'Rigor' },
              description: {
                fr: 'Expérimentation et validation rigoureuse des modèles ML',
                en: 'Rigorous experimentation and validation of ML models'
              },
            },
            {
              icon: '💬',
              title: { fr: 'Communication technique', en: 'Technical Communication' },
              description: {
                fr: 'Présentation claire de résultats et insights techniques',
                en: 'Clear presentation of technical results and insights'
              },
            },
            {
              icon: '🤝',
              title: { fr: 'Travail collaboratif', en: 'Collaborative Work' },
              description: {
                fr: 'Expérience en équipe multidisciplinaire R&D',
                en: 'Experience in multidisciplinary R&D teams'
              },
            },
          ].map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="text-center">
                  <div className="text-5xl mb-4">{quality.icon}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {quality.title[language]}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {quality.description[language]}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionTitle
          title={language === 'fr' ? 'Certifications & Formations' : 'Certifications & Training'}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Cert 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded mb-2">
                      {language === 'fr' ? 'Obtenue' : 'Completed'}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      Data Engineering SQL
                    </h3>
                    <p className="text-xs text-primary-600 font-medium mb-2">Beginner</p>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li>• PostgreSQL — requêtes avancées & indexation</li>
                      <li>• Snowflake — Cloud Data Warehouse</li>
                      <li>• ETL design & data pipeline best practices</li>
                      <li>• Data warehousing & modélisation dimensionnelle</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Cert 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🐍</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded mb-2">
                      {language === 'fr' ? 'En cours' : 'In Progress'}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      Data Engineering Python
                    </h3>
                    <p className="text-xs text-primary-600 font-medium mb-2">Intermediate</p>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li>• Python avancé pour Data Engineering</li>
                      <li>• Apache Airflow — DAGs & scheduling</li>
                      <li>• Pipeline automation & monitoring</li>
                      <li>• Git workflows & code review</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Cert 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-indigo/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded mb-2">
                      {language === 'fr' ? 'Obtenue' : 'Completed'}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      {language === 'fr' ? 'Pédagogie Certifiée' : 'Certified Pedagogy'}
                    </h3>
                    <p className="text-xs text-primary-600 font-medium mb-2">BSK Leader · 2021</p>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li>• {language === 'fr' ? 'Formation professionnelle à l\'enseignement' : 'Professional teaching training'}</li>
                      <li>• {language === 'fr' ? 'Méthodes pédagogiques adaptatives' : 'Adaptive teaching methods'}</li>
                      <li>• {language === 'fr' ? 'Taux de réussite amélioré de +25%' : 'Student success rate improved +25%'}</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
}