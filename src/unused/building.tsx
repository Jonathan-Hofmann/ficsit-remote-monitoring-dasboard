  /**
     * {
    "building": "Constructor",
    "location": {
      "x": 246034.03125,
      "y": -190829.25,
      "z": 2271.178467,
      "rotation": 270
    },
    "Recipe": "Concrete",
    "production": [
      {
        "Name": "Concrete",
        "CurrentProd": 9.9,
        "MaxProd": 15.0,
        "ProdPercent": "66.300003"
      }
    ],
    "ingredients": [
      {
        "Name": "Limestone",
        "CurrentConsumed": 29.799999,
        "MaxConsumed": 45.0,
        "ConsPercent": "66.300003"
      }
    ],
    "ManuSpeed": 1.0,
    "IsConfigured": true,
    "IsProducing": true,
    "IsPaused": false,
    "CircuitID": 1
  },
     */

        {/* <Stack sx={{margin: '50px 0'}} display={'flex'} alignItems={'center'}>
                <Box sx={{ width: '70%' }}>
                    <Stepper alternativeLabel activeStep={step}>
                        {steps.map((label, index) => {
                            const labelProps: {
                                optional?: React.ReactNode;
                                error?: boolean;
                            } = {};
                            if (isFailingStep(index)) {
                                labelProps.optional = (
                                    <Typography variant="body2" sx={{fontSize:'12px', marginTop: '6px'}} textAlign={'center'} color="error">
                                        {errorText}
                                    </Typography>
                                );
                                labelProps.error = true;
                            }

                            return (
                                <Step key={label}>
                                    <StepLabel {...labelProps}><strong>{label}</strong></StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </Stack> */}

            let errorText = "";
            const steps = [
              "Configure a Recipe",
              "Start Producing",
              " Lay Back and Relax",
            ];
          
            const isFailingStep = (step: number) => {
              if (step === 0) {
                if (buildingsData.IsConfigured === true) {
                  return false;
                }
                errorText = "Recipe not configured!";
                return true;
              }
          
              if (step === 1) {
                if (buildingsData.IsProducing === true) {
                  return false;
                }
                errorText = "Not able to produce... Check Power!";
                return true;
              }
            };
