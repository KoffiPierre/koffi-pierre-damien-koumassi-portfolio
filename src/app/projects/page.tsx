'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaFilter, FaGithub, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { Project } from '@/lib/types';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Card, { CardBody } from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = projectsData as Project[];

  const categories = [
    { id: 'all', label: { fr: 'Tous', en: 'All' } },
    { id: 'ai', label: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence' } },
    { id: 'web', label: { fr: 'Web', en: 'Web' } },
    { id: 'fullstack', label: { fr: 'Full-Stack', en: 'Full-Stack' } },
    { id: 'mobile', label: { fr: 'Mobile', en: 'Mobile' } },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            title={language === 'fr' ? 'Mes Projets' : 'My Projects'}
            subtitle={language === 'fr' 
              ? 'Une collection de mes réalisations en IA, développement web et mobile' 
              : 'A collection of my achievements in AI, web and mobile development'}
            centered
          />
        </motion.div>
      </Section>

      {/* Filters */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-2 shadow-sm">
            <FaFilter className="text-neutral-400 ml-2" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-cyan overflow-hidden">
                    {/* Placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-white text-4xl text-center font-bold">
                      {project.title[language]}
                    </div>

                    {/* Overlays */}
                    <div className="absolute top-4 left-4">
                        <Badge variant="primary">
                        {project.category.toUpperCase()}
                        </Badge>
                    </div>

                    {project.featured && (
                        <div className="absolute top-4 right-4">
                        <Badge variant="warning">
                            ⭐ {language === 'fr' ? 'Vedette' : 'Featured'}
                        </Badge>
                        </div>
                    )}

                    {project.video && (
                        <div className="absolute bottom-4 right-4">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                            <FaPlay className="w-4 h-4 text-primary-600 ml-0.5" />
                        </div>
                        </div>
                    )}
                  </div>

                  <CardBody className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {project.title[language]}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4 flex-1 line-clamp-3">
                      {project.description[language]}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" size="sm">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-neutral-200">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx}>
                            <p className="text-xs text-neutral-500 mb-1">
                              {metric.label[language]}
                            </p>
                            <p className="text-lg font-bold text-primary-600">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-neutral-200">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex-1"
                        >
                          <FaGithub className="mr-2" />
                          Code
                        </Button>
                      )}
                      <Link href={`/projects/${project.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          {language === 'fr' ? 'Détails' : 'Details'}
                          <FaArrowRight className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {language === 'fr' ? 'Aucun projet trouvé' : 'No projects found'}
            </h3>
            <p className="text-neutral-600">
              {language === 'fr' 
                ? 'Essayez une autre catégorie' 
                : 'Try another category'}
            </p>
          </motion.div>
        )}
      </Section>

      {/* Stats */}
      <Section className="bg-neutral-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: projects.length, label: { fr: 'Projets totaux', en: 'Total Projects' } },
            { value: projects.filter(p => p.category === 'ai').length, label: { fr: 'Projets IA', en: 'AI Projects' } },
            { value: projects.filter(p => p.featured).length, label: { fr: 'Projets vedettes', en: 'Featured Projects' } },
            { value: '10+', label: { fr: 'Technologies', en: 'Technologies' } },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label[language]}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}