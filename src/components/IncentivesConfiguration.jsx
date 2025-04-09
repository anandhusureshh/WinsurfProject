import React, { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  IconButton,
  Alert,
  Grid,
  InputLabel,
  InputAdornment,
  Switch,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PercentIcon from '@mui/icons-material/PercentOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const ICON_SIZE = '18px';
const INPUT_HEIGHT = '40px';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '24px',
  marginBottom: '24px',
  border: '1px solid #CDD5DF',
  borderRadius: '16px',
  backgroundColor: '#FFFFFF',
  position: 'relative',
  '&:hover .delete-program': {
    opacity: 1,
  },
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  color: '#121926',
  padding: '4px',
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: INPUT_HEIGHT,
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
  },
  '& .MuiSelect-icon': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: INPUT_HEIGHT,
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
  },
  '& .MuiInputAdornment-root': {
    '& .MuiSvgIcon-root': {
      width: ICON_SIZE,
      height: ICON_SIZE,
      color: '#6C7787',
    },
  },
}));

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: INPUT_HEIGHT,
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
  },
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
  marginBottom: '24px',
  '& .MuiFormControlLabel-root': {
    marginRight: 0,
  },
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const InfoAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: '#4065C5',
  color: '#FFFFFF',
  borderRadius: '6px',
  marginBottom: '16px',
  '& .MuiAlert-icon': {
    color: '#FFFFFF',
  },
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const GridInputsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr auto 1fr',
  gap: '16px',
  marginBottom: '16px',
  alignItems: 'center',
  position: 'relative',
  paddingRight: '40px',
}));

const VerticalInputsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '16px',
}));

const DeleteRowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '4px',
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
    color: '#6C7787',
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  height: INPUT_HEIGHT,
  color: '#4065C5',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));

const CalcTypeRadioGroup = styled(RadioGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
  '& .MuiFormControlLabel-root': {
    marginRight: 0,
  },
}));

const CriteriaTypeBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  marginTop: '24px',
}));

const IncentiveAmountBox = styled(Box)(({ theme }) => ({
  padding: '24px',
  borderRadius: '8px',
  backgroundColor: '#F8FAFC',
  height: '100%',
  minHeight: 'fit-content',
}));

const LeftColumnBox = styled(Box)(({ theme }) => ({
  padding: '24px',
  borderRadius: '8px',
  height: '100%',
  minHeight: 'fit-content',
}));

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#4065C5',
      '& + .MuiSwitch-track': {
        backgroundColor: '#4065C5',
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
  },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  '& .title-section': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .controls-section': {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  '& .toggle-section': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  '& .collapse-button': {
    color: '#6C7787',
  },
}));

const IncentivesConfiguration = ({ 
  programNumber, 
  onAddMore, 
  isLast, 
  onDelete,
  onProgramTypeChange,
  usedProgramTypes = [],
}) => {
  const [expanded, setExpanded] = useState(true);
  const [programType, setProgramType] = useState('');
  const [calculationType, setCalculationType] = useState('plain');
  const [criteria, setCriteria] = useState('');
  const [rows, setRows] = useState([{ id: 1, incentiveUnit: 'rupee' }]);
  const [incentiveType, setIncentiveType] = useState('single');
  const [isActive, setIsActive] = useState(false);

  const handleProgramTypeChange = (e) => {
    const newType = e.target.value;
    setProgramType(newType);
    onProgramTypeChange(programNumber, newType);
    setCriteria('');
    setCalculationType('plain');
    setIncentiveType('single');
  };

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, incentiveUnit: 'rupee' }]);
  };

  const handleDeleteRow = (id) => {
    if (rows.length > 1) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const handleIncentiveUnitChange = (id, value) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, incentiveUnit: value } : row
    ));
  };

  const renderLeftColumn = () => (
    <LeftColumnBox>
      <Typography variant="subtitle1" mb={2}>Choose Incentive</Typography>
      <StyledRadioGroup
        value={programType}
        onChange={handleProgramTypeChange}
      >
        <FormControlLabel
          value="variable"
          control={<Radio sx={{ color: '#4065C5' }} />}
          label="Variable"
          disabled={programNumber !== 1 && usedProgramTypes.includes('variable')}
        />
        <FormControlLabel
          value="milestone"
          control={<Radio sx={{ color: '#4065C5' }} />}
          label="Milestone"
        />
        <FormControlLabel
          value="conveyance"
          control={<Radio sx={{ color: '#4065C5' }} />}
          label="Conveyance"
        />
      </StyledRadioGroup>

      {(programType === 'variable' || programType === 'milestone') && (
        <Box mt={3}>
          <Typography variant="subtitle1" mb={2}>Choose Criteria</Typography>
          <StyledFormControl fullWidth>
            <InputLabel>Choose</InputLabel>
            <Select
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              label="Choose"
            >
              <MenuItem value="amount_collected">Amount Collected</MenuItem>
              <MenuItem value="recovery_rate">Recovery Rate</MenuItem>
              <MenuItem value="accounts_closed">Accounts Closed</MenuItem>
            </Select>
          </StyledFormControl>
        </Box>
      )}

      {programType === 'variable' && criteria && criteria !== 'recovery_rate' && (
        <Box mt={3}>
          <Typography variant="subtitle1" mb={2}>Calculation Type</Typography>
          <CalcTypeRadioGroup
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value)}
          >
            <FormControlLabel
              value="plain"
              control={<Radio sx={{ color: '#4065C5' }} />}
              label="Plain"
            />
            <FormControlLabel
              value="grid"
              control={<Radio sx={{ color: '#4065C5' }} />}
              label="Grid"
            />
          </CalcTypeRadioGroup>
        </Box>
      )}
    </LeftColumnBox>
  );

  const renderMilestoneContent = () => {
    switch (criteria) {
      case 'amount_collected':
      case 'accounts_closed':
        return (
          <>
            <StyledRadioGroup
              value={incentiveType}
              onChange={(e) => setIncentiveType(e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="single"
                control={<Radio sx={{ color: '#4065C5' }} />}
                label="Single Date Incentive"
              />
              <FormControlLabel
                value="target"
                control={<Radio sx={{ color: '#4065C5' }} />}
                label="Target Date Incentive"
              />
            </StyledRadioGroup>

            <InfoAlert
              icon={<HelpOutlineIcon />}
              severity="info"
            >
              {incentiveType === 'single'
                ? "Set an incentive for collecting the target amount on a chosen, single date."
                : "Set an incentive for collecting the target amount anytime up to a chosen deadline."}
            </InfoAlert>

            {rows.map((row) => (
              <VerticalInputsContainer key={row.id}>
                <StyledDatePicker
                  label={incentiveType === 'single' ? "Collect on date" : "Collect by date"}
                  slotProps={{
                    textField: {
                      size: 'small',
                    },
                  }}
                />
                <StyledTextField
                  label={criteria === 'amount_collected' ? "Target Amount" : "Target Accounts"}
                  size="small"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    ...(criteria === 'amount_collected' && {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupeeIcon />
                        </InputAdornment>
                      ),
                    }),
                  }}
                />
                <StyledTextField
                  label="Incentive Amount"
                  size="small"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupeeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {rows.length > 1 && (
                  <DeleteRowButton onClick={() => handleDeleteRow(row.id)}>
                    <DeleteOutlineIcon />
                  </DeleteRowButton>
                )}
              </VerticalInputsContainer>
            ))}
            <AddButton startIcon={<AddIcon />} onClick={handleAddRow}>
              Add more
            </AddButton>
          </>
        );

      case 'recovery_rate':
        return (
          <VerticalInputsContainer>
            <StyledDatePicker
              label="Collect by date"
              slotProps={{
                textField: {
                  size: 'small',
                },
              }}
            />
            <StyledTextField
              label="Collect % Amount"
              size="small"
              type="number"
              InputProps={{
                inputProps: { min: 0, max: 100 },
                endAdornment: (
                  <InputAdornment position="end">
                    <PercentIcon />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              label="Incentive Amount"
              size="small"
              type="number"
              InputProps={{
                inputProps: { min: 0 },
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </VerticalInputsContainer>
        );

      default:
        return null;
    }
  };

  const renderIncentiveAmount = () => {
    if (!criteria && programType !== 'conveyance') {
      return (
        <IncentiveAmountBox>
          <Typography variant="h6">Incentive Amount</Typography>
        </IncentiveAmountBox>
      );
    }

    return (
      <IncentiveAmountBox>
        <Typography variant="h6" mb={3}>Incentive Amount</Typography>
        {programType === 'variable' && (
          <>
            {criteria === 'amount_collected' && (
              <>
                {calculationType === 'plain' ? (
                  <StyledTextField
                    fullWidth
                    label="Incentive % of collected amount"
                    size="small"
                    type="number"
                    InputProps={{
                      inputProps: { min: 0, max: 100 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <PercentIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                ) : (
                  <>
                    {rows.map((row) => (
                      <GridInputsContainer key={row.id}>
                        <StyledTextField
                          label="Amount"
                          size="small"
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                        <Typography>To</Typography>
                        <StyledTextField
                          label="Amount"
                          size="small"
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                        <Typography>To</Typography>
                        <StyledTextField
                          label="Incentive"
                          size="small"
                          type="number"
                          InputProps={{
                            inputProps: { 
                              min: 0,
                              max: row.incentiveUnit === 'percent' ? 100 : undefined 
                            },
                            startAdornment: row.incentiveUnit === 'rupee' ? (
                              <InputAdornment position="start">
                                <CurrencyRupeeIcon />
                              </InputAdornment>
                            ) : null,
                            endAdornment: (
                              <InputAdornment position="end">
                                <Select
                                  value={row.incentiveUnit}
                                  onChange={(e) => handleIncentiveUnitChange(row.id, e.target.value)}
                                  variant="standard"
                                  sx={{
                                    '&:before': { display: 'none' },
                                    '&:after': { display: 'none' },
                                    '& .MuiSelect-select': { 
                                      py: 0,
                                      color: '#6C7787',
                                    },
                                  }}
                                >
                                  <MenuItem value="rupee">₹</MenuItem>
                                  <MenuItem value="percent">%</MenuItem>
                                </Select>
                              </InputAdornment>
                            ),
                          }}
                        />
                        {rows.length > 1 && (
                          <DeleteRowButton onClick={() => handleDeleteRow(row.id)}>
                            <DeleteOutlineIcon />
                          </DeleteRowButton>
                        )}
                      </GridInputsContainer>
                    ))}
                    <AddButton startIcon={<AddIcon />} onClick={handleAddRow}>
                      Add more
                    </AddButton>
                  </>
                )}
              </>
            )}
            {criteria === 'recovery_rate' && (
              <>
                <StyledRadioGroup
                  value={incentiveType}
                  onChange={(e) => setIncentiveType(e.target.value)}
                  sx={{ mb: 2 }}
                >
                  <FormControlLabel
                    value="single"
                    control={<Radio sx={{ color: '#4065C5' }} />}
                    label="Single Date Incentive"
                  />
                  <FormControlLabel
                    value="target"
                    control={<Radio sx={{ color: '#4065C5' }} />}
                    label="Target Date Incentive"
                  />
                </StyledRadioGroup>

                <InfoAlert
                  icon={<HelpOutlineIcon />}
                  severity="info"
                >
                  {incentiveType === 'single'
                    ? "Set an incentive for collecting the target amount on a chosen, single date."
                    : "Set an incentive for collecting the target amount anytime up to a chosen deadline."}
                </InfoAlert>

                <VerticalInputsContainer>
                  <StyledDatePicker
                    label={incentiveType === 'single' ? "Collect on date" : "Collect by date"}
                  />
                  <StyledTextField
                    label="Collect % Amount"
                    size="small"
                    type="number"
                    InputProps={{
                      inputProps: { min: 0, max: 100 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <PercentIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledTextField
                    label="Incentive Amount"
                    size="small"
                    type="number"
                    InputProps={{
                      inputProps: { min: 0 },
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupeeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </VerticalInputsContainer>
              </>
            )}
          </>
        )}
        {programType === 'milestone' && renderMilestoneContent()}
        {programType === 'conveyance' && (
          <StyledTextField
            fullWidth
            label="Incentive per accounts closed"
            size="small"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      </IncentiveAmountBox>
    );
  };

  return (
    <StyledBox>
      {programNumber !== 1 && (
        <DeleteButton className="delete-program" onClick={onDelete}>
          <DeleteOutlineIcon />
        </DeleteButton>
      )}
      <HeaderBox>
        <Box className="title-section">
          <Typography variant="h6">Program {programNumber}</Typography>
        </Box>
        <Box className="controls-section">
          <Box className="toggle-section">
            <Typography 
              variant="body2" 
              sx={{ 
                color: isActive ? '#4065C5' : '#6C7787',
                fontWeight: 500,
              }}
            >
              Activate Program
            </Typography>
            <StyledSwitch
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
          </Box>
          <IconButton 
            className="collapse-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </Box>
      </HeaderBox>

      {expanded && (
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {renderLeftColumn()}
          </Grid>
          <Grid item xs={6}>
            {renderIncentiveAmount()}
          </Grid>
        </Grid>
      )}

      {isLast && (
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <AddButton onClick={onAddMore}>
            Create Another
          </AddButton>
        </Box>
      )}
    </StyledBox>
  );
};

export default IncentivesConfiguration;
