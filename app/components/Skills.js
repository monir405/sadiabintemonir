import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const skillGroups = [
  {
    label: 'Languages',
    value: 'Python, TypeScript, JavaScript, Java, C/C++, React, Next.js, React Native, HTML5, CSS3, Material UI',
  },
  {
    label: 'Backend & APIs',
    value: 'FastAPI, NestJS, Express, REST APIs',
  },
  {
    label: 'Data & Databases',
    value: 'PostgreSQL, MySQL, Redis, Pandas',
  },
  {
    label: 'Cloud & Infrastructure',
    value: 'AWS (S3, Lambda, IAM, VPC, Glue, Athena, EMR Serverless, Lake Formation), Terraform, Docker',
  },
  {
    label: 'Tools & Platforms',
    value: 'Git, GitHub, Linux, Windows',
  },
];

const Skills = () => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to bottom, #d0e6ff, #ffffff)',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Technologies
        </Typography>

        {skillGroups.map((group) => (
          <Box
            key={group.label}
            sx={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}
          >
            <BuildIcon sx={{ marginTop: '0.15rem' }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {group.label}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7 }}>
                {group.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
