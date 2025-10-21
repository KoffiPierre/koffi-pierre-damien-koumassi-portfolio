'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { Project } from '@/lib/types';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Card, { CardBody } from '@/components/common/Card';
import projectsData from '@/data/projects.json';
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();

  const project = projectsData.find(p => p.id === params.id) as Project | undefined;

  if (!project) {
    return (
      <Section className="pt-32">
        <Container>
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'fr' ? 'Projet non trouvé' : 'Project not found'}
            </h1>
            <Button variant="primary" onClick={() => router.push('/projects')}>
              <FaArrowLeft className="mr-2" />
              {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back button */}
            <button
              onClick={() => router.push('/projects')}
              className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8 transition-colors"
            >
              <FaArrowLeft />
              {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
            </button>

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="primary">
                    {project.category.toUpperCase()}
                  </Badge>
                  {project.featured && (
                    <Badge variant="warning">
                      ⭐ {language === 'fr' ? 'Vedette' : 'Featured'}
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                  {project.title[language]}
                </h1>
                <p className="text-xl text-neutral-600 mb-4">
                  {project.description[language]}
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <FaCalendar />
                  {new Date(project.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <FaGithub className="mr-2" />
                  {language === 'fr' ? 'Voir le code' : 'View code'}
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="primary"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  {language === 'fr' ? 'Démo en ligne' : 'Live demo'}
                </Button>
              )}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image/Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.video ? (
                  <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-full"
                    >
                      <source src={project.video} type="video/mp4" />
                      Votre navigateur ne supporte pas la vidéo.
                    </video>
                  </div>
                ) : (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {language === 'fr' ? 'À propos du projet' : 'About the project'}
                </h2>
                <div className="prose prose-lg text-neutral-600">
                  <p>{project.longDescription[language]}</p>
                </div>
              </motion.div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    {language === 'fr' ? 'Résultats' : 'Results'}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {project.metrics.map((metric, index) => (
                      <Card key={index}>
                        <CardBody className="text-center">
                          <p className="text-sm text-neutral-600 mb-2">
                            {metric.label[language]}
                          </p>
                          <p className="text-3xl font-bold text-primary-600">
                            {metric.value}
                          </p>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      {language === 'fr' ? 'Technologies utilisées' : 'Technologies used'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      {language === 'fr' ? 'Informations' : 'Information'}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-neutral-500 mb-1">
                          {language === 'fr' ? 'Catégorie' : 'Category'}
                        </p>
                        <p className="font-medium text-neutral-900">
                          {project.category.toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-500 mb-1">
                          {language === 'fr' ? 'Date' : 'Date'}
                        </p>
                        <p className="font-medium text-neutral-900">
                          {new Date(project.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      {project.github && (
                        <div>
                          <p className="text-neutral-500 mb-1">GitHub</p>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline break-all"
                          >
                            {language === 'fr' ? 'Voir le dépôt' : 'View repository'}
                          </a>
                        </div>
                      )}
                      {project.demo && (
                        <div>
                          <p className="text-neutral-500 mb-1">
                            {language === 'fr' ? 'Démo' : 'Demo'}
                          </p>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline break-all"
                          >
                            {language === 'fr' ? 'Voir la démo' : 'View demo'}
                          </a>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other projects */}
      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            {language === 'fr' ? 'Autres projets' : 'Other projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="cursor-pointer" onClick={() => router.push(`/projects/${otherProject.id}`)}>
                    <div className="h-40 bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white text-3xl font-bold">
                      {(otherProject as Project).title[language].split(' ').map(w => w[0]).join('').slice(0, 3)}
                    </div>
                    <CardBody>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {(otherProject as Project).title[language]}
                      </h3>
                      <p className="text-sm text-neutral-600 line-clamp-2">
                        {(otherProject as Project).description[language]}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
}