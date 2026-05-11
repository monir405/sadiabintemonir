"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Experience = () => {
  const experiences = [
    {
      title: 'Sensor Data Pipeline',
      date: '',
      description:
        'Developed a configurable sensor-data ETL platform in Python and FastAPI to ingest CSV telemetry, enforce data-quality rules, and align time-series datasets for downstream analytics.',
      skills: [
        'Built an S3-backed raw, cleaned, and curated data lake, persisting processed outputs and run artifacts for repeatable processing and historical analysis.',
        'Added event-driven ingestion with S3, Lambda, and PySpark on EMR Serverless for batch transformations and backfill workflows.',
        'Integrated AWS Glue Data Catalog, Athena, and Lake Formation to publish curated datasets for SQL-based analysis with governed access controls.',
        'Provisioned the platform with Terraform, including IAM roles and policies, VPC networking, subnets, security groups, and deployment of a Dockerized FastAPI control-plane service.',
      ],
    },
    {
      title: 'P&ID (Piping and Instrumentation Diagram) Visualization',
      date: '',
      description:
        'Developed an interactive P&ID visualization system, enabling users to design, manipulate, and export diagrams with real-time updates and persistent state storage.',
      skills: [
        'Built an interactive P&ID editor for users to create, update, and persist diagram state with immediate UI feedback.',
        'Designed and implemented backend APIs for diagram save/load workflows, storing structured diagram data in PostgreSQL.',
        'Implemented diagram export handling with AWS S3, including secure upload/retrieval flows using presigned URLs and IAM-based access control.',
        'Added an AWS Lambda workflow to process exported diagram artifacts asynchronously, supporting validation and metadata generation for JSON/PNG outputs.',
        'Provisioned core cloud resources with Terraform for S3, Lambda, and IAM policies.',
      ],
    },
    {
      title: 'Mapper - Voyage Visualization & Planning System',
      date: '',
      description:
        'Developed an advanced maritime system to plan, track, and optimize voyages with interactive maps, dynamic route visualization, and real-time weather integration.',
      skills: [
        'Built an S3-backed geospatial asset pipeline for voyage planning data, storing uploaded GeoJSON and CSV inputs and publishing processed map layers for frontend consumption.',
        'Implemented a serverless preprocessing workflow with AWS Lambda and Mapshaper to normalize and optimize route overlays.',
        'Automated weather and NOTMAR data refresh using Amazon EventBridge Scheduler, updating voyage overlays on a recurring schedule.',
        'Deployed the Next.js and React-Leaflet application on AWS Amplify, supporting interactive waypoint routing, clustered map layers, and timeline-based voyage visualization.',
        'Provisioned core AWS infrastructure with Terraform.',
      ],
    },
    {
      title: 'Team Performance Dashboard',
      date: '',
      description:
        'Developed a cloud-integrated operational dashboard for engineering managers with controlled reporting workflows, real-time system updates, and observable service behavior.',
      skills: [
        'Built backend APIs and dashboard workflows for sprint metrics, reporting, and operational visibility.',
        'Developed Redis pub-sub and WebSocket-based real-time updates for responsive live data delivery.',
        'Implemented S3-backed report export workflows and basic CloudWatch/Terraform configuration.',
      ],
    },
    {
      title: 'Graph Visualizer',
      date: '',
      description: 'Developed a graphing tool for uploading structured CSVs, normalizing data, and visualizing trends over time.',
      skills: [
        'Engineered chunked median sampling and dynamic axis scaling to improve performance on large datasets.',
        'Implemented date selection, brush interaction, and normalized/absolute views for user-friendly charting experiences.',
        'Ensured full responsiveness, tooltips for accessibility, and clarity of data visualization.',
      ],
    },
    {
      title: 'Scanner UI & Real-Time Notification Feed',
      date: '',
      description:
        'Built a responsive scanner with support for multi-camera setups, autofocus, and polygon-based detection overlays. Developed robust error handling and state-driven controls for pause/resume, freeze-frame, and auto-navigation. Designed and implemented a paginated notification system with React Query, Next.js App Router, and Redis-backed APIs for dynamic content updating and user interaction. Focused on UX by incorporating accessibility features and smooth animations.',
      skills: [],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const experiencesPerSlide = 2;
  const totalSlides = Math.ceil(experiences.length / experiencesPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const slideExperiences = experiences.slice(
    currentSlide * experiencesPerSlide,
    currentSlide * experiencesPerSlide + experiencesPerSlide
  );

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)',
        padding: '4rem 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
      }}
    >
      <Container sx={{ marginTop: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <Box>
            <button
              onClick={handlePrev}
              style={{
                background: '#d0e6ff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginRight: '1rem',
              }}
              aria-label="Previous"
            >
              &larr;
            </button>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Experience
          </Typography>
          <Box>
            <button
              onClick={handleNext}
              style={{
                background: '#d0e6ff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginLeft: '1rem',
              }}
              aria-label="Next"
            >
              &rarr;
            </button>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {slideExperiences.map((experience, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(to bottom , #d0e6ff, #ffffff)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: '100%',
                  alignSelf: 'center',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {experience.title} {experience.date && `(${experience.date})`}
                  </Typography>

                  {experience.description && (
                    <Typography variant="body1" paragraph>
                      {experience.description}
                    </Typography>
                  )}

                  {experience.skills.length > 0 && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Key Features & Achievements:
                      </Typography>
                      <List sx={{ paddingLeft: '1rem', marginTop: '0rem' }}>
                        {experience.skills.map((skill, i) => (
                          <ListItem disableGutters key={i}>
                            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
                              <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
                            </ListItemIcon>
                            <Typography variant="body2" sx={{ color: '#555' }}>
                              {skill}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Typography variant="body2" sx={{ color: '#888' }}>
            Slide {currentSlide + 1} of {totalSlides}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
