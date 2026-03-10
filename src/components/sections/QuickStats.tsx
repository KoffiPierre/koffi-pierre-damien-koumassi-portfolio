'use client';

import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaProjectDiagram, FaAward } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import Container from '../common/Container';

export default function QuickStats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: FaBrain,
      value: '75%',
      label: { fr: 'Précision ML max', en: 'Top ML Accuracy' },
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: FaCode,
      value: '20+',
      label: { fr: 'Technologies', en: 'Technologies' },
      color: 'from-accent-cyan to-accent-sky',
    },
    {
      icon: FaProjectDiagram,
      value: '6+',
      label: { fr: 'Projets livrés', en: 'Shipped Projects' },
      color: 'from-accent-indigo to-primary-600',
    },
    {
      icon: FaAward,
      value: '3+',
      label: { fr: 'Ans d\'expérience', en: 'Years of Experience' },
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-neutral-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label[language]}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}