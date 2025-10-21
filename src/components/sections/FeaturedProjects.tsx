'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { Project } from '@/lib/types';
import Card, { CardBody } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import projectsData from '@/data/projects.json';

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const featuredProjects = projectsData.filter(p => p.featured) as Project[];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="projects" className="bg-neutral-50">
      <SectionTitle
        title={language === 'fr' ? 'Projets en vedette' : 'Featured Projects'}
        subtitle={language === 'fr' 
          ? 'Une sélection de mes réalisations les plus significatives en IA et développement'
          : 'A selection of my most significant achievements in AI and development'}
        centered
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card hover className="h-full flex flex-col">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-cyan overflow-hidden">
                {/* Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl text-center font-bold">
                  {project.title[language]}
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="primary">
                    {project.category.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <CardBody className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {project.title[language]}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-4 flex-1">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" size="sm">
                      +{project.technologies.length - 3}
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

      {/* View all button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link href="/projects">
          <Button variant="primary" size="lg">
            {language === 'fr' ? 'Voir tous les projets' : 'View all projects'}
            <FaArrowRight className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}