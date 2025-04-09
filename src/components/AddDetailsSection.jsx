import React, { useState, useEffect } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Checkbox,
  ListItemText,
  IconButton,
  Grid,
  Divider,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '8px 0',
  marginBottom: '16px',
  position: 'relative',
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '-32px',
  transform: 'translateY(-50%)',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  color: '#121926',
  padding: '4px',
  '& .MuiSvgIcon-root': {
    width: '20px',
    height: '20px',
  },
}));

const StyledGrid = styled(Grid)({
  '& .MuiGrid-item': {
    paddingTop: '1px',
    paddingBottom: '1px',
  }
});

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '48px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#CDD5DF',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#4065C5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4065C5',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F8FAFC',
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#E3E8EF',
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6C7787',
    '&.Mui-disabled': {
      color: '#9AA4B2',
    },
  },
  '& .MuiSelect-multiple': {
    height: 'auto',
    minHeight: '48px',
  },
}));

const SelectHeader = styled(Box)(({ theme }) => ({
  padding: '8px 16px',
  borderBottom: '1px solid #E3E8EF',
}));

const AddDetailsSection = ({ id, onDelete, isLast, onAddMore, usedAllocators = [] }) => {
  const [allocator, setAllocator] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [bucket, setBucket] = useState('');
  const [selectedAgents, setSelectedAgents] = useState([]);

  const allocators = [
    'IDFC First bank',
    'Smartcoin financials pvt ltd',
    'Stucred',
    'Hinduja Layland Finance',
    'Stashfin',
    'Cashe',
  ].filter(a => !usedAllocators.includes(a));

  const products = [
    'Homeloan',
    'Credit Card',
    'Two Wheeler Loan',
    'Four Wheeler Loan',
    'Personal Loan',
    'Business Loan',
  ];

  const buckets = ['Predue', 'Postdue', 'Writeoff', 'NPA'];

  const agents = [
    'Agent 1',
    'Agent 2',
    'Agent 3',
    'Agent 4',
    'Agent 5',
  ];

  const isAgentsEnabled = allocator !== '' && selectedProduct !== '' && bucket !== '';

  const handleSelectAllAgents = (event) => {
    event.stopPropagation();
    setSelectedAgents(selectedAgents.length === agents.length ? [] : [...agents]);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
    setBucket('');
    setSelectedAgents([]);
  };

  return (
    <StyledBox>
      <Box sx={{ position: 'relative', '&:hover .delete-icon': { opacity: 1 } }}>
        {id !== 1 && (
          <DeleteButton className="delete-icon" onClick={onDelete}>
            <DeleteOutlineIcon />
          </DeleteButton>
        )}
        
        <StyledGrid container spacing={1}>
          <Grid item xs={3}>
            <StyledFormControl fullWidth>
              <InputLabel>Allocator</InputLabel>
              <Select
                value={allocator}
                onChange={(e) => {
                  setAllocator(e.target.value);
                  setSelectedProduct('');
                  setBucket('');
                  setSelectedAgents([]);
                }}
                label="Allocator"
              >
                {allocators.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={3}>
            <StyledFormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select
                value={selectedProduct}
                onChange={handleProductChange}
                label="Product"
              >
                {products.map((product) => (
                  <MenuItem key={product} value={product}>
                    {product}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={3}>
            <StyledFormControl fullWidth>
              <InputLabel>Bucket</InputLabel>
              <Select
                value={bucket}
                onChange={(e) => {
                  setBucket(e.target.value);
                  setSelectedAgents([]);
                }}
                label="Bucket"
                disabled={!selectedProduct}
              >
                {buckets.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={3}>
            <StyledFormControl fullWidth>
              <InputLabel disabled={!isAgentsEnabled}>Agents</InputLabel>
              <Select
                multiple
                value={selectedAgents}
                onChange={(e) => setSelectedAgents(e.target.value)}
                disabled={!isAgentsEnabled}
                renderValue={(selected) => `${selected.length} agents selected`}
              >
                <SelectHeader display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="body2">{selectedAgents.length} selected</Typography>
                  <Button
                    sx={{ 
                      color: '#4065C5', 
                      textTransform: 'none',
                      minWidth: 'auto',
                      padding: '4px 8px',
                    }}
                    onClick={handleSelectAllAgents}
                  >
                    {selectedAgents.length === agents.length ? 'Deselect all' : 'Select all'}
                  </Button>
                </SelectHeader>
                <Divider />
                {agents.map((agent) => (
                  <MenuItem key={agent} value={agent}>
                    <Checkbox
                      checked={selectedAgents.indexOf(agent) > -1}
                      sx={{
                        color: '#4065C5',
                        '&.Mui-checked': {
                          color: '#4065C5',
                        },
                      }}
                    />
                    <ListItemText primary={agent} />
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Grid>
        </StyledGrid>

        {isLast && (
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              onClick={onAddMore}
              sx={{
                color: '#4065C5',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              Add more
            </Button>
          </Box>
        )}
      </Box>
    </StyledBox>
  );
};

export default AddDetailsSection;
