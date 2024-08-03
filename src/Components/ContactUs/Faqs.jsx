import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Faqs() {
  return (
    <div className='mx-auto text-white'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           Can I cancel my order?
        </AccordionSummary>
        <AccordionDetails>
        Please let me know if any additional information is required from my end to process this cancellation. I would appreciate confirmation of this cancellation at your earliest convenience.

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How do I create an account?
        </AccordionSummary>
        <AccordionDetails>
        Please let me know if any additional information is required from my end to process this cancellation. I would appreciate confirmation of this cancellation at your earliest convenience.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How can I reset my password? 
        </AccordionSummary>
        <AccordionDetails>
        Please let me know if any additional information is required from my end to process this cancellation. I would appreciate confirmation of this cancellation at your earliest convenience.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           How do I contact customer support?
        </AccordionSummary>
        <AccordionDetails>
        Please let me know if any additional information is required from my end to process this cancellation. I would appreciate confirmation of this cancellation at your earliest convenience.

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           What payment methods you accept?
        </AccordionSummary>
        <AccordionDetails>
        Please let me know if any additional information is required from my end to process this cancellation. I would appreciate confirmation of this cancellation at your earliest convenience.

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
