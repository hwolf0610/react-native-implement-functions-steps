import React from 'react';
import {Box, Text, HStack, Button, VStack} from 'native-base';
import {COLORS} from '../../utils/Colors';

export default function WelcomeScreen(props) {
  return (
    <Box
      height={'100%'}
      paddingTop={'36px'}
      paddingLeft={'12px'}
      background={COLORS.generalWhite}>
      <VStack
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={'24px'}>
        <Text>Welcome Screen</Text>
        <Button
          onPress={() => {
            props.navigation.navigate('Dashboard');
          }}>
          <Text>Go Home Page</Text>
        </Button>
      </VStack>
    </Box>
  );
}
