import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddDetailsSection from './AddDetailsSection';
import IncentivesConfiguration from './IncentivesConfiguration';

const Header = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 120px',
  zIndex: 1000,
}));

const HeaderDivider = styled(Divider)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  margin: '0 120px',
  borderColor: '#E3E8EF',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: '64px',
  padding: '24px 120px',
  backgroundColor: '#EEF2F6',
  minHeight: 'calc(100vh - 64px)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  color: '#121926',
  fontWeight: 600,
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
}));

const ProgramsContainer = styled(Box)(({ theme }) => ({
  padding: '0',
  marginTop: '24px',
  '& > div:first-of-type': {
    marginTop: 0,
  },
  '& > div:last-child': {
    marginBottom: 0,
  },
}));

const IncentivesConfigurator = () => {
  const [detailsBlocks, setDetailsBlocks] = useState([{ id: 1, allocator: '' }]);
  const [programs, setPrograms] = useState([{ id: 1, programType: '' }]);
  const [usedProgramTypes, setUsedProgramTypes] = useState([]);

  const handleAddDetailsBlock = () => {
    setDetailsBlocks([...detailsBlocks, { id: detailsBlocks.length + 1, allocator: '' }]);
  };

  const handleDeleteDetailsBlock = (id) => {
    setDetailsBlocks(detailsBlocks.filter(block => block.id !== id));
  };

  const handleAddProgram = () => {
    setPrograms([...programs, { id: programs.length + 1, programType: '' }]);
  };

  const handleDeleteProgram = (id) => {
    setPrograms(programs.filter(program => program.id !== id));
  };

  const handleSavePrograms = () => {
    // Implement save logic
    console.log('Saving programs...');
  };

  const getUsedAllocators = (currentId) => {
    return detailsBlocks
      .filter(block => block.id !== currentId)
      .map(block => block.allocator)
      .filter(Boolean);
  };

  const handleUpdateAllocator = (id, allocator) => {
    setDetailsBlocks(detailsBlocks.map(block => 
      block.id === id ? { ...block, allocator } : block
    ));
  };

  const handleProgramTypeChange = (programNumber, newType) => {
    setPrograms(programs.map(program => 
      program.id === programNumber ? { ...program, programType: newType } : program
    ));
    if (!usedProgramTypes.includes(newType)) {
      setUsedProgramTypes([...usedProgramTypes, newType]);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#EEF2F6' }}>
      <Header>
        <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            sx={{ mr: 2, color: '#121926' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#121926' }}>
            Incentives Calculator
          </Typography>
        </Box>
        <ButtonGroup>
          <Button
            variant="outlined"
            sx={{
              height: '40px',
              color: '#4B5565',
              borderColor: '#E3E8EF',
              '&:hover': {
                borderColor: '#E3E8EF',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            sx={{
              height: '40px',
              backgroundColor: '#FD7149',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#e56541',
              },
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
            }}
            onClick={handleSavePrograms}
          >
            Save Programs
          </Button>
        </ButtonGroup>
        <HeaderDivider />
      </Header>
      <ContentContainer>
        <SectionTitle variant="subtitle1">Add Details</SectionTitle>
        {detailsBlocks.map((block) => (
          <AddDetailsSection
            key={block.id}
            id={block.id}
            onDelete={() => handleDeleteDetailsBlock(block.id)}
            isLast={block.id === detailsBlocks.length}
            onAddMore={handleAddDetailsBlock}
            usedAllocators={getUsedAllocators(block.id)}
          />
        ))}
        <ProgramsContainer>
          {programs.map((program) => (
            <IncentivesConfiguration
              key={program.id}
              programNumber={program.id}
              onDelete={() => handleDeleteProgram(program.id)}
              onAddMore={handleAddProgram}
              isLast={program.id === programs.length}
              onProgramTypeChange={handleProgramTypeChange}
              usedProgramTypes={usedProgramTypes}
            />
          ))}
        </ProgramsContainer>
      </ContentContainer>
    </Box>
  );
};

export default IncentivesConfigurator;
