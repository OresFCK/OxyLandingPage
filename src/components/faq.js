import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FAQComponent = () => {
  const faqItems = [
    {
      question: 'Why do I need a beat license?',
      answer: 'A beat license grants you the legal right to use a specific beat in your own creative projects, such as songs, videos, or performances. It ensures that you have the necessary permissions and protections when using the beat for commercial purposes.',
    },
    {
      question: 'How do licenses differ?',
      answer: 'Licenses may differ in terms of usage rights, distribution limits, and permitted commercial use. Basic licenses usually have more restrictions compared to premium or unlimited licenses. It is important to review and choose the appropriate license that aligns with your specific needs and requirements.',
    },
    {
      question: 'How to split royalties from streaming platforms?',
      answer: 'Royalty splits from streaming platforms typically require a separate agreement among the collaborators involved in the music production. This agreement outlines the percentage or split of royalties each collaborator will receive. It is recommended to consult with a legal professional or use online services that provide royalty splitting tools to ensure a fair distribution of royalties.',
    },
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQComponent;